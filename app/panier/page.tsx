"use client";

import { useState, useEffect } from "react";
import { FaTrashAlt, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Inputs } from "@/type";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const router = useRouter()

  const UserLogin = () => {
    const storeUser = JSON.parse(localStorage.getItem("users") || "null");
    console.log(storeUser)
  }

  useEffect(() => {
    try {
      UserLogin()
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Erreur de parsing du panier :", error);
      setCartItems([]); // Réinitialiser en cas d'erreur
    }
  }, []);
  

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);
  

  const incrementQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : null
            : item
        )
        .filter((item): item is CartItem => item !== null) // ✅ TypeScript est satisfait
    );
  };
  
  

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.length > 0
      ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
      : "0.00";
  };
  

  return (
    <>
    <Navbar></Navbar>
    <div className="container py-5">
      <h1 className="text-center mb-5 display-4 fw-bold text-primary">
        <FaShoppingCart className="me-2" /> Votre Panier
      </h1>
      <div className="row">
        <div className="col-md-8">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="card mb-4 shadow-sm border-0 rounded-4">
                <div className="row g-0">
                  <div className="col-md-3 d-flex align-items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="rounded-start"
                      style={{ objectFit: "cover" }} />
                  </div>
                  <div className="col-md-9 d-flex flex-column justify-content-center p-3">
                    <h5 className="fw-bold mb-1">{item.name}</h5>
                    <p className="text-muted mb-2">Prix: $ {item.price.toFixed(2)}</p>
                    <div className="d-flex align-items-center">
                      <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => decrementQuantity(item.id)}>
                        <FaMinus />
                      </button>
                      <span className="fw-bold mx-2">{item.quantity}</span>
                      <button className="btn btn-outline-secondary btn-sm me-4" onClick={() => incrementQuantity(item.id)}>
                        <FaPlus />
                      </button>
                      <button className="btn btn-outline-danger btn-sm" onClick={() => removeItem(item.id)}>
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted text-center">Votre panier est vide.</p>
          )}
        </div>

        <div className="col-md-4">
          <div className="card p-4 shadow-sm border-0 rounded-4 bg-light">
            <h4 className="fw-bold">Résumé de la commande</h4>
            <hr />
            <p className="d-flex justify-content-between">
              <span>Sous-total:</span>
              <span className="fw-bold">${getTotalPrice()}</span>
            </p>
            <button
              className="btn btn-primary btn-lg w-100 mt-3 rounded-3"
              onClick={() => router.push("/checkout")}
            >
              Passer à la caisse
            </button>
          </div>
        </div>
      </div>
    </div><Footer></Footer></>
  );
};

export default CartPage;
