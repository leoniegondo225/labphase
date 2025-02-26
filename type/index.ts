import { ReactNode } from "react";

export type Inputs = {
  nom?: string;
  prenom?: string;
  sexe?: string;
  pays?: string;
  ville?: string;
  adresse?: string;
  entreprise?: string;
  typeEntreprise?: string;
  typearticle?: string;
  email?: string;
  typeCompte?: string;
  password?: string;
  tel?: string;
};

export type ProductType = {
  nomProduit?: string;
  qte?: number;
  id?: string;
  idvendeur?: string;
  namestore?: string; 
  prix?: number;
  photo?: string;
  descriptionProduit?: string;
  
}



export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};