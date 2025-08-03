import Navbar from "../../Components/Navbar/Navbar.jsx";
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
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <style>{`
          body {

            margin: 0;
            padding: 0;
            min-height: 100vh;
            font-family: sans-serif;
            background-color:#fff8ff;
          }

          footer {
            width: 100%;
            position: relative;
            text-align: center;
            padding: 10px 0;
            margin-top: auto;
          }

        `}</style>
      </head>

      <body>


        <Navbar />

        {children}


        <footer><Footer /></footer>

      </body>
    </html>
  );
}
