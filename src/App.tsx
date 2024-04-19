import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Menu from "./components/Menu";
import { RootState } from "./redux/store/store";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  console.log();
  return (
    <>
      <Header />
      <main className="w-[750px] mx-auto">
        {/* <Welcome /> */}
        <Menu />
      </main>
    </>
  );
}

export default App;
// globalni state
// 1. user
// 2. loading
