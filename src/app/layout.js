import { Inter } from "next/font/google";
import "./styles/globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SOS Service",
  description:
    "Empresa especializada em prestação de serviços de manutenção em estações de energia para diversas empresas. Saiba mais sobre nossos serviços e expertise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
