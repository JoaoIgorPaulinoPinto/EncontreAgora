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
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <style>{`
          /* Oculta overlay de erro do dev */
          #__next-dev-overlay {
            display: none !important;
          }

          body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            background: url('/background.png') no-repeat center center fixed;
            background-size: cover;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: sans-serif;
          }

          footer {
            width: 100%;
            position: relative;
            background-color: #f8f9fa;
            text-align: center;
            padding: 10px 0;
            margin-top: auto;
          }
        `}</style>
      </head>

      <body>
        <Navbar />

        {children}

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
