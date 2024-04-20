import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Welcome />} />
          <Route path="/menu" element={<Menu />} />
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
