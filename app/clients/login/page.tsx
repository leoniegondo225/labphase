"use client"
import { headers } from "next/headers"
import Link from "next/link"
import { useState } from "react"

function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage]= useState("")


    const submitForm = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setMessage("")
        try {
            const req = await fetch("/api/login", {
                headers: {"content-type": "application.json"},
                method: "Post",
                body: JSON.stringify({email, password})
        })
        const res= await req.json()
        console.log(res)
        if(res&& res.data){
            setMessage("utilisateur créer avec succès")
            console.log(res.data)
            localStorage.setItem("users", JSON.stringify(res.data))
        }else{
            setMessage
        }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <div className="bg" >
            <div className="container  shadow">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <img src="/img/3.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 card p-5">
                        <h1>Connexion</h1>
                        <form onSubmit={(e)=> submitForm(e)} > 
                            <div className="mb-4 pt-3">
                            <input type="email" name="email" className="form-control" id="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)} />
                            
                            </div>
                            <div className="mb-4">
                            <input type="password" name="password" className="form-control" id="password" placeholder="password" required onChange={(e) => setPassword} />
                            
                            </div>
                                <div className="col-lg-12 text-center">
                                <button className="btn btn-primary" type="submit">Connexion</button>
                                </div>
                                <div className="row">
                                    <div className="d-flex justify-content-between">
                                        <p className="">Déjà un compte?</p>
                                        <Link href="sign-up" className="fw-bold">S'inscrire</Link>
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
export default Login