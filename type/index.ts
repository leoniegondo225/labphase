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
  id?: string;
  idvendeur?: string;
  namstore?: string; 
  name?: string;
  price?: number;
  image?: string;
  description?: string;
}