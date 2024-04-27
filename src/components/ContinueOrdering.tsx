import Button from "./Button";
import { useUserSlice } from "../utils/hooks";
import { useNavigate } from "react-router-dom";



const ContinueOrdering = () => {
  const { name } = useUserSlice()
  const navigate = useNavigate()
  return (
    <Button size="big" buttonClickHandler={() => navigate("/menu")}>
      Continue ordering, {name}
    </Button>
  );
}

export default ContinueOrdering
