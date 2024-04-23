// import Button from "./Button";
// import { changeUserProperty } from "../redux/features/userSlice";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../redux/store/store";
// import { useForm, submitHandler } from "react-hook-form";

// type OrderInputType = {
//   info: string;
// };

// const OrderInput = ({ info }: OrderInputType) => {
//   const { name, address, phoneNumber } = useSelector(
//     (state: RootState) => state.user
//   );
//   const dispatch = useDispatch();

  
//   // const value =
//   //   info === "First Name"
//   //     ? name
//   //     : info === "Address"
//   //     ? address
//   //     : info === "Phone number"
//   //     ? phoneNumber
//   //         : " ";
//   // console.log(value)
  
// const value = " "

//   const form = useForm();
//   const { register } = form;
  
//   const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = e.target.value;
//     let action;
//     switch (info) {
//       case "First Name":
//         action = changeUserProperty({ key: "name", value: newValue });
//         break;
//       case "Address":
//         action = changeUserProperty({ key: "address", value: newValue });
//         break;
//       case "Phone number":
//         action = changeUserProperty({ key: "phoneNumber", value: newValue });
//         break;
//       default:
//         break;
//     }
//     if (action) {
//       dispatch(action);
//     }
//   };
// // console.log(value)

//   return (
//     <div className="border-b relative border-b-stone-200 flex items-center justify-between py-1">
//       <label htmlFor={info}>{info}</label>
//       <input
//         id={info}
//         // required
//         type="text"
//         // value={value}
//         {...register(info)}
//         // onChange={(e) => inputHandler(e)}
//         className="rounded-full capitalize p-4 text-sm transition-all outline-none duration-300 placeholder:text-stone-400 placeholder:text-sm focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 w-[600px]"
//       />
//       {info === "Address" && (
//         <div className="absolute right-5">
//           <Button
//             buttonClickHandler={() => console.log("pozicija")}
//             size="small"
//           >
//             Get position
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderInput;
