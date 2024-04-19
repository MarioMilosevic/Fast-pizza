import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Menu from "./components/Menu";
function App() {
  return (
    <>
      <Header />
      <main className="w-[750px] mx-auto">
      {/* <Welcome /> */}
      <Menu/>
      </main>
    </>
  )
}

export default App;
// globalni state 
// 1. user
// 2. loading 
