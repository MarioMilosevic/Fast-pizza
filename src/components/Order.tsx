import Button from "./Button";
import { useSelector } from "react-redux";
import { getTotalCartPrice } from "../redux/features/cartSlice";
import { useState } from "react";
import { DevTool } from "@hookform/devtools";
import { z } from "zod";
import { phoneRegex } from "../utils/constants";
import { RootState } from "../redux/store/store";
import { useForm } from "react-hook-form";
import { sendData } from "../utils/fetch";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  userName: z.string().min(3, "First name must contain at least 3 character(s)"),
  address: z.string().min(10, "Address must contain at least 10 character(s)"),
  phoneNumber: z.string().regex(phoneRegex, "Invalid Number"),
});

type FormValues = z.infer<typeof schema>;

const Order = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const totalSum = useSelector(getTotalCartPrice);
  const user = useSelector((state: RootState) => state.user);
  const { cart } = useSelector((state: RootState) => state.cart);

  const priorityExpense = isClicked ? totalSum * 0.05 : 0;
  const finalPrice = totalSum + priorityExpense;
  // const currentDate = new Date().toISOString();
  // console.log(currentDate);

  const form = useForm<FormValues>({
    defaultValues: {
      userName: user.name,
      address: user.address,
      phoneNumber: user.phoneNumber,
    },
    resolver: zodResolver(schema),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: FormValues) => {
    const { userName, address, phoneNumber } = data;
    const dataToSend = {
      customer: userName,
      phone: phoneNumber,
      address,
      priority: isClicked,
      position: "",
      cart,
    };
    sendData(dataToSend);
    // moram id sacuvat
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
        <p className=" text-red-500 text-sm py-1">{errors.phoneNumber?.message}</p>

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
            checked={isClicked}
            onChange={() => setIsClicked((prev) => !prev)}
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
