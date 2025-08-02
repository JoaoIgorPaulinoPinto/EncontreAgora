import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/footer/footer.jsx";
import img from './13783.jpg'
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
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <style>{`
          /* Oculta overlay de erro do dev */

          body {

            margin: 0;
            padding: 0;
            min-height: 100vh;
            font-family: sans-serif;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            display: block;
            align-items: center;
            background-image: url('./13783.jpg');

          }

          footer {
            width: 100%;
            position: relative;
            text-align: center;
            padding: 10px 0;
            margin-top: auto;
          }
          .content{
          position: relative;
          z-index: 0;
          margin-top: 100;
          }
        `}</style>
      </head>

      <body>


        <Navbar />


        <div className="content"> {children} </div>


        <footer><Footer /></footer>

        
      </body>
    </html>
  );
}
