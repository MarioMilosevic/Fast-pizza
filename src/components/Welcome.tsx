import { useDispatch } from "react-redux";
import { useUserSlice } from "../utils/hooks";
import { setLoading } from "../redux/features/globalLoadingSlice";
import { useNavigate } from "react-router-dom";
import UserForm from "./UserForm";

import ContinueOrdering from "./ContinueOrdering";

const Welcome = () => {
  const { name } = useUserSlice();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToMenu = () => {
    dispatch(setLoading(true));
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

      {name ? (
        <ContinueOrdering clickHandler={goToMenu} />
      ) : (
        <UserForm clickHandler={goToMenu} />
      )}
    </section>
  );
};

export default Welcome;
