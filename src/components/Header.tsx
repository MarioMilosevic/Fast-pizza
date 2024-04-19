import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
const Header = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <header className="bg-yellow-400 px-5 py-3 flex justify-between items-center">
      <button className="tracking-widest">FAST REACT PIZZA CO.</button>
      <form>
        <input
          type="text"
          className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 placeholder:text-sm focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
          placeholder="Search order #"
        />
      </form>
      {user.name !== "" && <div>{user.name}</div>}
    </header>
  );
};

export default Header;
