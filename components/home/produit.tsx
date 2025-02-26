"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { FaHeart, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { ProductType } from "@/type";

export const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [load, setLoad] = useState(true);
  const [likedProducts, setLikedProducts] = useState<{ [key: string]: boolean }>({});

  //Ajouter un produit
  const addProduit = async (data: ProductType) => {
    const req = await fetch('/api/addproduit', {
      headers: { "Content-type": "application/json" },
      method: 'post',
      body: JSON.stringify(data)
    });
    const res = await req.json();
    if (res === "ok") console.log("Article ajouté");
    else console.log(res);
  };

  //Récupération des produits
  const getProduit = async () => {
    try {
      const req = await fetch('/api/getproduit', {
        headers: { "Content-type": "application/json" },
        method: 'get',
      });
      const res = await req.json();
      console.log(res);
      setProducts(res);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Toggle "J'aime" un produit
  const toggleLike = (productId: string) => {
    setLikedProducts((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  useEffect(() => {
    getProduit();
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
      {!load ? (
        <>
          <h2 className="text-center mb-4">Articles en vente</h2>
          <Row>
            {products && products.length > 0 && products.map((product) => (
              <Col key={product.id || product.nomProduit} product={product} md={6} lg={4} xl={3} className="mb-4">
                <Card className="shadow-sm">
                  <Image
                    src={product.photo ? product.photo :"/img/camlog.png" } 
                    alt={product.nomProduit!}
                    width={300}
                    height={200}
                    className="card-img-top"
                  />
                  <h1>{product.photo}</h1>
                  <Card.Body>
                    <Card.Title>{product.nomProduit}</Card.Title>
                    <Card.Text>{product.descriptionProduit}</Card.Text>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaRegStarHalfStroke className="text-warning" />
                      </div>
                      <FaHeart
                        className={`heart-icon ${likedProducts[String(product.id)] ? "liked" : ""}`}
                        onClick={() => toggleLike(String(product.id))}
                        style={{
                          cursor: "pointer",
                          color: likedProducts[String(product.id)] ? "red" : "gray",
                        }}
                      />
                    </div>
                    <h5 className="text-success">{product.prix} Fcfa</h5>
                    <Button variant="warning" onClick={() => addToCart(product)}>
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
      ) : (
        <>Chargement des produits...</>
      )}

      {/* Modal pour afficher les détails du produit */}
      {selectedProduct && (
        <Modal show={true} onHide={() => setSelectedProduct(null)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.nomProduit}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-center mb-3">
              <Image
                src={selectedProduct.photo ? selectedProduct.photo :"/img/camlog.png" } 
                alt={selectedProduct.nomProduit || "Image du produit"}
                width={300}
                height={200}
                className="rounded"
              />
            </div>
            <h5>Description</h5>
            <p className="fw-bold">{selectedProduct.descriptionProduit}</p>
            <h6 className="fw-bold">Prix: {selectedProduct.prix} Fcfa</h6>
            <h6 className="text-danger">Quantité en stock: {selectedProduct.qte}</h6>
            <h6 className="fw-bold">Nom de la boutique: {selectedProduct.namestore}</h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setSelectedProduct(null)}>
              Fermer
            </Button>
            <Button variant="warning">Ajouter au Panier</Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default ProductList;
