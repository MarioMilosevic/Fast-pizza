import { phoneRegex } from "../utils/constants";
import { z } from "zod";
export const orderSchema = z.object({
  userName: z
    .string()
    .min(3, "First name must contain at least 3 character(s)"),
  address: z.string().min(10, "Address must contain at least 10 character(s)"),
  phoneNumber: z.string().regex(phoneRegex, "Invalid Number"),
});

export const userNameSchema = z.object({
  name:z.string().min(3)
})

export type UserNameFormValues = z.infer<typeof userNameSchema>

export type OrderFormValues = z.infer<typeof orderSchema>;
