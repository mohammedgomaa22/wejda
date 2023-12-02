import NavBar from "@/components/navbar/NavBar";
import "./index.css";
import { Cairo } from "next/font/google";
import Footer from "@/components/footer/Footer";
import TransitionLayout from "@/components/TransitionLayout";
import { LangProvider } from "@/lang/TranslationProvider";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Wejda",
  description: "Wejda website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className={cairo.className}>
        <LangProvider>
          <NavBar />
          <TransitionLayout>
            {children}
            <Footer />
          </TransitionLayout>
        </LangProvider>
      </body>
    </html>
  );
}
