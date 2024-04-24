import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Welcome from "./components/Welcome";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Order from "./components/Order";
import OrderStatus from "./components/OrderStatus";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Welcome />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order/new" element={<Order />} />
          <Route path="/order/mario" element={<OrderStatus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// globalni state
// 1. user
// 2. loading
// kada dodjem na order, ali da je request poslat, tj da je success response

// za submitanje forme React hook forms prvo ovo 
// pa zovi pa cemo kasnije Zood ///////////////////////////////////
// za validaciju inputa Zod pa onda ovo

///////////////////////////////////////////////////////////////////////////////////////
// odradi form validaciju sa zoddom i onda odradi
// fecuj i display order details
// za formatiranje datuma koristi date-fns
