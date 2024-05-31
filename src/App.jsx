import "./App.css";
import {
  Header,
  MainContent,
  ProductSection,
  Footer,
  FAQ,
} from "./components/feature";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div>
        <Header />
        <MainContent />
        <ProductSection />
        <FAQ />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
