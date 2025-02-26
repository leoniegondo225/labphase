import { database } from "@/db/firebase";
import { ProductType } from "@/type";
import { collection, getDocs, query } from "firebase/firestore";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const produitsQuery = query(collection(database, "produit"));
    const snap = await getDocs(produitsQuery);

    if (!snap.empty) {
      // Mapping des documents récupérés pour créer un tableau de produits
      const data = snap.docs.map((doc) => {
        const docData = doc.data();
        return {
          nomProduit: docData.nomProduit,
          prix: docData.prix,
          devise: docData.devise,
          qte: docData.qte,
          lieu: docData.lieu,
          namestore:docData.namestore,
          descriptionProduit: docData.descriptionProduit,
        };
      });

      return NextResponse.json(data.length > 0 ? data : { message: "Pas de produit disponible." });
    } else {
      return NextResponse.json({ message: "Aucun produit trouvé." }, { status: 404 });
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des produits :", error);
    return NextResponse.json({ error: "Erreur lors de la récupération des produits" }, { status: 500 });
  }
};
