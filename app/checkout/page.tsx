"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const CheckoutPage = () => {
  const [formData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "paypal",
    promoCode: "",
  });

  const [discount] = useState(0);
  const [message] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);


  const calculateTotal = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (subtotal - (subtotal * discount) / 100).toFixed(2);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert("Commande validée avec succès !");
    localStorage.removeItem("cart"); // On vide le panier après validation
  };

  return (
    <><Navbar></Navbar>
    <Container className="my-5">
      <Row>
        <Col md={6} className="mb-4">
          <h2 className="mb-4">Détails de la Commande</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <Card key={item.id} className="mb-3">
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>Quantité : {item.quantity}</Card.Text>
                  <Card.Text>Prix : Number({item.price.toFixed(2)}) €</Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p className="text-muted">Votre panier est vide.</p>
          )}
          <h4>Total : {calculateTotal()} €</h4>
        </Col>

        <Col md={6}>
          <h2 className="mb-4">Informations de Livraison</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nom Complet</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} required />
            </Form.Group>
            <Button variant="success" type="submit" className="w-100">
              Valider la Commande
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    <Footer></Footer></>
  );
};

export default CheckoutPage;
