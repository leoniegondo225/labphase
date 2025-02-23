"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaHeart, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { ProductType } from "@/type";



export const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [load, setLoad] = useState(true)
  const [likedProducts, setLikedProducts]= useState<{ [key: string]: boolean }>({})

  

  //Ajouter un produit
  const addProduit = async (data: ProductType) => {
    const req = await fetch('/api/addproduit', {
      headers: { "Content-type": "application/json" },
      method: 'post',
      body: JSON.stringify(data)
    })
    const res = await req.json()
    if (res === "ok") console.log("Article ajouter")
    else console.log(res)
  }

  //Recuperation des produits
  const getProduit = async () => {
    try {
      const req = await fetch('/api/getproduit', {
        headers: { "Content-type": "application/json" },
        method: 'get',
      })
      const res = await req.json()
      console.log(res)
      setProducts(res)
        setLoad(false)
    } catch (error) {
      console.log(error)
    }
  }

   // Toggle "J'aime" un produit
   const toggleLike = (productId: string) => {
    setLikedProducts((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId], // Inverse l'état "aimé"
    }));
  };



  useEffect(() => {

    //Recupérztion des produits
    getProduit()
    /*  */
    const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      } 
  }, []);

  const addToCart = (product: ProductType) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Container className="mt-4" data-aos="fade-up">
      {!load ?
        <>
        <h2 className="text-center mb-4">Articles en vente</h2>
      <Row>
        {products && products.length > 0 && products.map((product) => (
          <Col key={product.id} md={6} lg={4} xl={3} className="mb-4">
            <Card className="shadow-sm">
              <Image
                src={product.image!}
                alt={product.name!}
                width={300}
                height={200}
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        {/* Les étoiles */}
                        <div>
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaRegStarHalfStroke className="text-warning" />
                        </div>
                        {/* Coeur J'aime */}
                        <FaHeart
                          className={`heart-icon ${likedProducts[product.id] ? "liked" : ""}`}
                          onClick={() => toggleLike(product.id)}
                          style={{
                            cursor: "pointer",
                            color: likedProducts[product.id] ? "red" : "gray",
                          }}
                        />
                    </div>

                <h5 className="text-success">{product.price} €</h5>
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Ajouter au panier
                </Button>

                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
        </>
        :( 
        <>
          Chargement des produit...      
          </>)
      }
      
    </Container>
  );
};

export default ProductList;
