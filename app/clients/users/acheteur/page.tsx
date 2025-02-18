"use client"

import Link from "next/link";
import { useState } from "react"


function Inscription() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [sexe, setSexe] = useState("");
    const [pays, setPays] = useState("");
    const [ville, setVille] = useState("");
    const [adresse, setAdresse] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setMessage("")
        try {
            const data = {
                nom,
                prenom,
                sexe,
                pays,
                ville,
                adresse,
                email,
                password,
                tel,
                typeCompte: "clients",
            };
            const req = await fetch("/api/sign-up", {
                headers: { "content-type": "applicaation/json" },
                method: "Post",
                body: JSON.stringify(data)
            })
            const res = await req.json()
            if (res.data) {
                console.log(res.data)
                return res.data
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="mt-2">
                <div className="container hero">
                    <div className="row pt-2 align-items-center justify-centent-center me-2">
                        <div className="col-lg-6 ">
                            <div>
                                <h1 className="text-light">Bienvenu dans le monde de la technologie</h1>
                                <p className="pt-3 text-light">Rejoignez-nous dès aujourd'hui et découvrez une sélection unique d'appareils électroniques dernier cri. Profitez de nos offres exclusives et faites partie d'une communauté de passionnés toujours à la recherche des meilleures innovations technologiques.</p>
                            <button className="btn btn-success">Inscrivez-vous</button>
                            </div>
                        </div>

                        <div className="col-lg-6 text-center  mb-5">
                            <h2 className="fw-bold pt-3">Inscription</h2>
                            <form onSubmit={(e) => submitForm(e)}>
                                
                                <div className="row items-center mb-2 pt-3">
                                    <div className="form-floating mb-2 col-lg-6">
                                        <label htmlFor="nom">nom</label>
                                        <input type="text" name="nom" id="nom" className="form-control" placeholder="Nom" required onChange={(e) => setNom(e.target.value)} />

                                    </div>
                                    <div className="form-floating mb-2 col-lg-6">

                                        <input type="text" name="prenom" className="form-control" id="prenom" placeholder="Prenom" required onChange={(e) => setPrenom(e.target.value)} />
                                        <label htmlFor="prenom">Prénom</label>
                                    </div>
                                </div>
                                <div className="row items-center mb-2">
                                    <div className="form-floating mb-2 col-lg-6">

                                        <input type="text" name="ville" className="form-control" id="ville" placeholder="ville" required onChange={(e) => setVille(e.target.value)} />
                                        <label htmlFor="ville">Ville</label>

                                    </div>
                                    <div className="form-floating mb-2 col-lg-6">

                                        <input type="text" name="pays" className="form-control" id="pays" placeholder="pays" required onChange={(e) => setPays(e.target.value)} />
                                        <label htmlFor="pays">Pays</label>
                                    </div>
                                </div>
                                <div className=" mb-2 col-lg-12">

                                    <select className="form-select " aria-label="Sexe" required onChange={(e) => setSexe(e.target.value)}>
                                        <option >Sexe</option>
                                        <option value="Femme">Femme</option>
                                        <option value="Homme">Homme</option>
                                    </select>

                                </div>
                                <div className="form-floating mb-2 col-lg-12">

                                    <input type="text" name="adresse" className="form-control" id="adresse" placeholder="adresse" required onChange={(e) => setAdresse(e.target.value)} />
                                    <label htmlFor="adresse">Adresse</label>
                                </div>
                                <div className="form-floating mb-2 col-lg-12">

                                    <input type="text" name="Tel" className="form-control" id="tel" placeholder="tel" required onChange={(e) => setTel(e.target.value)} />
                                    <label htmlFor="tel">Téléphone</label>
                                </div>
                                <div className="form-floating mb-2 col-lg-12">

                                    <input type="email" name="email" className="form-control" id="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)} />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="form-floating mb-3 col-lg-12">

                                    <input type="password" className="form-control" name="mot de passe" id="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)} />
                                    <label htmlFor="password">Mot de passe</label>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary w-100 text-center col-lg-12" type="submit" >
                                        S'inscrire
                                    </button>
                                </div>
                                <div className="row">
                                    <div className="d-flex justify-content-between">
                                        <p className="text-light">Déjà un compte?</p>
                                        <Link href="login" className="fw-bold">Se connecter</Link>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-warning col-lg-12"> Se connecter avec Google</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Inscription