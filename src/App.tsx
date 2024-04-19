import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Menu from "./components/Menu";
// import Menu from "./components/Menu";
// import { RootState } from "./redux/store/store";
// import { useSelector } from "react-redux";
function App() {
  // const user = useSelector((state: RootState) => state.user);
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Welcome />}></Route>
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
