import { phoneRegex } from "../utils/constants";
import { z } from "zod";
export const orderSchema = z.object({
  userName: z
    .string()
    .min(3, "First name must contain at least 3 character(s)"),
  address: z.string().min(10, "Address must contain at least 10 character(s)"),
  phoneNumber: z.string().regex(phoneRegex, "Invalid Number"),
  priority: z.boolean(),
});

export type OrderFormValues = z.infer<typeof orderSchema>;
