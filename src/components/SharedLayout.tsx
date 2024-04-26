import { useCartSlice, useUserSlice, useLoadingSlice } from "../utils/hooks";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/features/globalLoadingSlice";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loading from "./Loading";
import CartStatus from "./CartStatus";

type SearchFormValue = {
  search: string;
};
const SharedLayout = () => {
  const { cart } = useCartSlice();
  const { name } = useUserSlice();
  const { loading } = useLoadingSlice();
  const navigate = useNavigate();
  const form = useForm<SearchFormValue>();
  const dispatch = useDispatch();
  const { register, handleSubmit, resetField } = form;
  const onSubmit = (data: SearchFormValue) => {
    const { search } = data;
    dispatch(setLoading(true));
    navigate(`/order/${search}`);
    resetField("search");
  };

  return (
    <>
      <header className="bg-yellow-400 px-5 py-3 flex justify-between items-center">
        <Link to={"/"} className="tracking-widest">
          FAST REACT PIZZA CO.
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("search")}
            className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 placeholder:text-sm focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
            placeholder="Search order #"
          />
        </form>
        {name !== "" && <div className="uppercase">{name}</div>}
      </header>
      {loading && <Loading />}
      <Outlet />
      {cart.length > 0 && <CartStatus />}
    </>
  );
};

export default SharedLayout;
