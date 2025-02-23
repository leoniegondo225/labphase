import { database } from "@/db/firebase";
import { ProductType } from "@/type";
import { collection, getDocs, query, where } from "firebase/firestore"
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const req = query(collection(database, "produit"));
        const snap = await getDocs(req)
        if (snap) {
            let data: ProductType[] = []
            snap.forEach((doc) => {
                data.push({
                    id: doc.id,
                    name: doc.data().name,
                    price: doc.data().price,
                    image: doc.data().image,
                    description: doc.data().description 
                })
            })
            if (data && data.length > 0) return NextResponse.json(data)
                else return NextResponse.json("Pas de produit")
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json("Erreur produite pendant la recupération des produits")
    }
}