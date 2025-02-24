"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { FaHeart, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { ProductType } from "@/type";



export const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [load, setLoad] = useState(true)
  const [likedProducts, setLikedProducts]= useState<{ [key: string]: boolean }>({})

  // Filtrer les produits
  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "" || product.name?.includes(selectedCategory)) &&
      product.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

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
      console.log("Liste des IDs produits :", products.map(p => p.id));
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
        {/* Sélection de catégorie */}
      <div className="mb-4">
        <label className="form-label">Catégorie</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="form-select"
        >
          <option value="">Toutes les catégories</option>
          <option value="Ordinateur">Ordinateurs</option>
          <option value="Téléphone">Téléphones</option>
          <option value="Accessoires">Accessoires</option>
        </select>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          className="form-control"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
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
                          className={`heart-icon ${likedProducts[String(product.id)]? "liked" : ""}`}
                          onClick={() => toggleLike(String(product.id))}
                          style={{
                            cursor: "pointer",
                            color: likedProducts[String(product.id)] ? "red" : "gray",
                          }}
                        />
                    </div>

                <h5 className="text-success">{product.price} Fcfa</h5>
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Ajouter au panier
                </Button>
                <Button variant="link" onClick={() => setSelectedProduct(product)}>
                      Voir Détails
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

       {/* Modal pour afficher les détails du produit */}
       {selectedProduct && (
        <Modal show={true} onHide={() => setSelectedProduct(null)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-center mb-3">
              <Image
                src={selectedProduct.image!}
                alt={selectedProduct.name!}
                width={400}
                height={300}
                className="rounded"
              />
            </div>
            <h5>Description</h5>
            <p>{selectedProduct.description}</p>
            <h6>Prix: {selectedProduct.price} €</h6>
            <h6>Quantité en stock: {selectedProduct.stockQuantity}</h6>
            <h6>Vendeur: {selectedProduct.namstore}</h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setSelectedProduct(null)}>
              Fermer
            </Button>
            <Button variant="primary">Ajouter au Panier</Button>
          </Modal.Footer>
        </Modal>
      )}
      
    </Container>
  );
};

export default ProductList;
