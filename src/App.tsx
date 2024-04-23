import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Order from "./components/Order";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Welcome />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order/new" element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// globalni state
// 1. user
// 2. loading
// 2 min po pici i nesto 10 min
// kada dodjem na order, ali da je request poslat, tj da je success response

// za submitanje forme React hook forms prvo ovo 
// pa zovi pa cemo kasnije Zood ///////////////////////////////////
// za validaciju inputa Zod pa onda ovo
