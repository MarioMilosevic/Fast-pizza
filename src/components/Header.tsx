import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { Link, Outlet } from "react-router-dom";
import Loading from "./Loading";
import CartStatus from "./CartStatus";
const Header = () => {
  const user = useSelector((state: RootState) => state.user);
  const loading = useSelector((state: RootState) => state.loading);
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <>
      <header className="bg-yellow-400 px-5 py-3 flex justify-between items-center">
        <Link to={"/"} className="tracking-widest">
          FAST REACT PIZZA CO.
        </Link>
        <form>
          <input
            type="text"
            className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 placeholder:text-sm focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
            placeholder="Search order #"
          />
        </form>
        {user.name !== "" && <div className="uppercase">{user.name}</div>}
      </header>
      {loading.value && <Loading />}
      <Outlet />
      {cart.cart.length > 0 && <CartStatus />}
    </>
  );
};

export default Header;
