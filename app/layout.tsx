"use client"
import "bootstrap/dist/css/bootstrap.css"
import "@/css/style.css"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en ms
      easing: "ease-in-out",
      once: true, // Exécuter une seule fois l'animation
    });
  }, []);
  return (
    <html lang="fr">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body >
      
        {children}
      
      
      </body>
    </html>
  );
}

