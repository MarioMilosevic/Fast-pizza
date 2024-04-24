import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCartPrice } from "../redux/features/cartSlice";
import { togglePriority } from "../redux/features/userSlice";
import { DevTool } from "@hookform/devtools";
import { z } from "zod";
import { setLoading } from "../redux/features/loadingSlice";
import { useNavigate} from "react-router-dom";
import { phoneRegex } from "../utils/constants";
import { RootState } from "../redux/store/store";
import { useForm } from "react-hook-form";
import { sendData } from "../utils/fetch";
import { zodResolver } from "@hookform/resolvers/zod";
import { addOrder } from "../redux/features/orderSlice";

const schema = z.object({
  userName: z
    .string()
    .min(3, "First name must contain at least 3 character(s)"),
  address: z.string().min(10, "Address must contain at least 10 character(s)"),
  phoneNumber: z.string().regex(phoneRegex, "Invalid Number"),
  priority: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

const Order = () => {
  const totalSum = useSelector(getTotalCartPrice);
  const { name, address, phoneNumber, priority } = useSelector(
    (state: RootState) => state.user
  );
  const { cart } = useSelector((state: RootState) => state.cart);
  const orders = useSelector((state: RootState) => state.orders);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const priorityExpense = priority ? totalSum * 0.05 : 0;
  const finalPrice = totalSum + priorityExpense;


  const form = useForm<FormValues>({
    defaultValues: {
      userName: name,
      address: address,
      phoneNumber: phoneNumber,
      priority: priority,
    },
    resolver: zodResolver(schema),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (formData: FormValues) => {
    try {
      dispatch(setLoading(true));
      const { userName, address, phoneNumber, priority } = formData;
      const dataToSend = {
        customer: userName,
        phone: phoneNumber,
        address,
        priority,
        position: "",
        cart,
      };
      const { data } = await sendData(dataToSend);
      console.log(data)
      dispatch(addOrder(data));
      navigate(`/order/${data.id}`)
      console.log(orders);
    } catch (error) {
      console.error("Error submitting order", error);
    }
  };

  const handleTogglePriority = () => {
    dispatch(togglePriority());
  };

  const getPosition = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("treba da nadje poziciju");
  };

  return (
    <div className="w-[750px] mx-auto py-8 flex flex-col gap-4">
      <h2 className="font-semibold text-lg">Ready to order? Let's go!</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="border-b border-b-stone-200 flex items-center justify-between py-1">
          <label htmlFor={"First Name"}>First Name</label>
          <input
            id={"First Name"}
            type="text"
            {...register("userName", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
            className="rounded-full capitalize p-4 text-sm transition-all outline-none duration-300 placeholder:text-stone-400 placeholder:text-sm focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 w-[600px]"
          />
        </div>
        <p className="text-red-500 text-sm py-1">{errors.userName?.message}</p>

        <div className="border-b border-b-stone-200 flex items-center justify-between py-1">
          <label htmlFor={"Phone number"}>{"Phone number"}</label>
          <input
            id={"Phone number"}
            type="text"
            {...register("phoneNumber", {
              required: {
                value: true,
                message: "Phone number is required",
              },
              validate: (fieldValue) => {
                if (!/^\d+$/.test(fieldValue)) {
                  return "Phone number must contain only numbers";
                }
                return true;
              },
            })}
            className="rounded-full capitalize p-4 text-sm transition-all outline-none duration-300 placeholder:text-stone-400 placeholder:text-sm focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 w-[600px]"
          />
        </div>
        <p className=" text-red-500 text-sm py-1">
          {errors.phoneNumber?.message}
        </p>

        <div className="border-b relative border-b-stone-200 flex items-center justify-between py-1">
          <label htmlFor={"Address"}>{"Address"}</label>
          <input
            id={"Address"}
            type="text"
            {...register("address", {
              required: {
                value: true,
                message: "Address is required",
              },
            })}
            className="rounded-full capitalize p-4 text-sm transition-all outline-none duration-300 placeholder:text-stone-400 placeholder:text-sm focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 w-[600px]"
          />

          <div className="absolute right-5">
            <Button
              buttonClickHandler={(
                e: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ) => getPosition(e)}
              size="small"
            >
              Get position
            </Button>
          </div>
        </div>
        <p className="text-red-500 text-sm py-1">{errors.address?.message}</p>
        <div className="flex gap-4 py-4">
          <input
            type="checkbox"
            id="checkbox"
            className="w-6 h-6 accent-yellow-400 focus:ring-offset-2 focus:ring focus:ring-yellow-400"
            checked={priority}
            onChange={handleTogglePriority}
          />
          <label htmlFor="checkbox" className="text-base font-medium">
            Want to give your order priority?
          </label>
        </div>
        <Button
          buttonClickHandler={() => console.log("treba da podje nedje")}
          size="big"
        >
          <span className="font-medium">
            Order now for €{finalPrice.toFixed(2)}
          </span>
        </Button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Order;
