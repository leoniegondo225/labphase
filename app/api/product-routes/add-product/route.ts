
import { database } from "@/db/firebase"
import { addDoc, collection, doc } from "firebase/firestore"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    try {
        const { nomProduit, codeProduit, descriptionProduit, prix, typeVente, devise ,date} = await req.json()
        const data = { nomProduit, codeProduit, descriptionProduit, prix, typeVente, devise ,date}
        const productCollection = await addDoc(collection(database, "produits"), data)
        if (productCollection) {
            return NextResponse.json({ data })
        } else {
            return NextResponse.json("Produit inexistant")
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json("Erreur lors de la création d'un produit")
    }
}