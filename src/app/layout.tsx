import Navbar from "../../Components/NavBar/Navbar.jsx";
import Footer from "../../Components/footer/footer.jsx";
export const metadata = {
  title: "Encontre Agora",
  description: "Qualquer serviço, a qualquer hora, em qualquer lugar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <style>
          {`
            /* Oculta o overlay de desenvolvimento do Next.js */
            #__next-dev-overlay {
              display: none !important;
            }

            /* Estilização do body */
            .body {
            flex: 1;
             min-height: 100vh;
             background: url('../../public/background.png') no-repeat center center fixed;

              width: 100%;
              height: 100vh;
              display: flex;
              flex-direction: column;
              justify-content: top;
              align-items: center;
            
              img{
              z-index: -1;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
              }
          
              footer{
              z-index: -1;
                width: 100%;
                position: relative;
                float: bottom;  
                bottom: 0;
                left: 0;
                background-color: #f8f9fa;
                text-align: center;
                padding: 10px 0;
              }
          `}
        </style>
      </head>

      <body className="body">

        <Navbar />
        <img src="/background.png" alt="Imagem de fundo" />
        
        {children}
        
        <footer className='footer'><Footer /></footer>
        </body>
     

    </html>
  );
}
