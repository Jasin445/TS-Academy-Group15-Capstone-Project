import { z } from "zod";

export default schema = z.object({
  fullname: z.string().trim().min(1, "Full name is required"),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().min(7, "Invalid phone number"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(100, "Message must not be greater than 100 characters"),
});