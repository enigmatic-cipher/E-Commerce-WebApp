import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import { ShopContextProvider } from "./Context/ShopContext";
import Checkout from "./Pages/Checkout";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
