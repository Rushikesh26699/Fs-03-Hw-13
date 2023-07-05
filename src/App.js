import "./App.css";
import {Routes,Route} from "react-router-dom"
import Navbar from "./Comp/Navbar";
import Home from "./Comp/Home"
import Products from "./Comp/Products";
import ContactUs from "./Comp/ContactUs";

function App() {
  return <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/contactus" element={<ContactUs/>}></Route>
    </Routes>
  </div>;
}

export default App;
