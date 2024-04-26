import { useDispatch } from "react-redux";
import { useUserSlice } from "../utils/hooks";
import { changeUserName } from "../redux/features/userSlice";
import { setLoading } from "../redux/features/globalLoadingSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Welcome = () => {

  const {name} = useUserSlice()
  const [value, setValue] = useState<string>("");
  // napravicu reakt hook form
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    goToMenu();
    navigate("/menu");
  };

  const goToMenu = () => {
    dispatch(setLoading(true));
    dispatch(changeUserName(value));
    navigate("/menu");
  };

  return (
    <section className="mx-auto py-16 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-medium text-center">
        The best pizza
        <br />
        <span className="text-2xl text-yellow-500 tracking-wide">
          Straight out of the oven, straight to you
        </span>
      </h1>

      {/* ovo ispod da refaktorisem */}
      {!name ? (
        <>
          <h3 className="pt-8 pb-4">
            👋 Welcome! Please start by telling us your name:
          </h3>
          <form className="pb-8" onSubmit={submitHandler}>
            <input
              type="text"
              className="rounded-full p-4 text-sm transition-all outline-none duration-300 placeholder:text-stone-400 placeholder:text-sm focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 w-72"
              placeholder="Your full name"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </form>
        </>
      ) : (
        <Button size="big" buttonClickHandler={goToMenu}>
          Continue ordering, {name}
        </Button>
      )}

      {value !== "" && (
        <Button size="big" buttonClickHandler={goToMenu}>
          Start ordering
        </Button>
      )}
    </section>
  );
};

export default Welcome;
