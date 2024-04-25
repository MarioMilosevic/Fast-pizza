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
          <Route path="/order/:orderId" element={<OrderStatus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

