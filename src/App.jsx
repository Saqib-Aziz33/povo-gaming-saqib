import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// layout
import Base from "./components/layouts/Base";
// other
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Base>
      </ChakraProvider>
    </BrowserRouter>
  );
}
export default App;
