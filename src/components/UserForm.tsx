import Button from "./Button";
import { useForm } from "react-hook-form";
import { changeUserName } from "../redux/features/userSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { userNameSchema, UserNameFormValues } from "../zod/zod";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const UserForm = () => {
  const form = useForm<UserNameFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(userNameSchema),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = form;

    const watchUserName = watch('name')
    
  const onSubmit = (data: UserNameFormValues) => {
    const { name } = data;
    dispatch(changeUserName(name));
    navigate("/menu");
  };
  return (
    <>
      <h3 className="pt-8 pb-4">
        👋 Welcome! Please start by telling us your name:
      </h3>
      <form className="pb-8" onSubmit={handleSubmit(onSubmit)} noValidate>
        <input
          id="name"
          type="text"
          {...register("name", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
          className="rounded-full p-4 text-sm transition-all outline-none duration-300 placeholder:text-stone-400 placeholder:text-sm focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 w-72"
          placeholder="Your full name"
        />
        <p className="text-red-500 text-sm py-2">{errors.name?.message}</p>
      </form>
      {watchUserName && (
        <Button size="big" buttonClickHandler={handleSubmit(onSubmit)}>
          Start ordering
        </Button>
      )}
    </>
  );
};

export default UserForm;
