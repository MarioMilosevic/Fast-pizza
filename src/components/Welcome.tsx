import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../redux/features/userSlice";
import { useState } from "react";
import { RootState } from "../redux/store/store";
import { Link } from "react-router-dom";
const Welcome = () => {
  const user = useSelector((state: RootState) => state.user);
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();
  console.log(user.name)
  return (
    <section className="mx-auto py-16 flex flex-col  items-center justify-center">
      <h1 className="text-3xl font-medium text-center">
        The best pizza
        <br />
        <span className="text-2xl text-yellow-500 tracking-wide">
          Straight out of the oven, straight to you
        </span>
      </h1>

      <h3 className="pt-8 pb-4">
        👋 Welcome! Please start by telling us your name:
      </h3>
      <form className="pb-8">
        <input
          type="text"
          className="rounded-full p-4 text-sm transition-all outline-none duration-300 placeholder:text-stone-400 placeholder:text-sm focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 w-72"
          placeholder="Your full name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      {value !== "" ? (
        <Link
          to={"/menu"}
          className="bg-yellow-400 px-8 py-4 rounded-full uppercase text-sm transition-all duration-300 hover:bg-yellow-300"
          onClick={() => dispatch(createUser(value))}
        >
          {user.name !== ""
            ? `Continue ordering, ${user.name}`
            : "Start ordering"}
        </Link>
      ) : (
        ""
      )}
    </section>
  );
};

export default Welcome;
