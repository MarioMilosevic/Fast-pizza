import Button from "./Button";
import { useUserSlice } from "../utils/hooks";
type ContinueOrderingProps = {
    clickHandler:() => void
}

const ContinueOrdering = ({ clickHandler }: ContinueOrderingProps) => {
    const {name} = useUserSlice()
  return (
    <Button size="big" buttonClickHandler={clickHandler}>
      Continue ordering, {name}
    </Button>
  );
}

export default ContinueOrdering
