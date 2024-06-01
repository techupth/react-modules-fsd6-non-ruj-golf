import "./App.css";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ProductSection from "./components/ProductSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
