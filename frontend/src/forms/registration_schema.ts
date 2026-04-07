import z from "zod";
import {
  forEmailValidation,
  forNameSrnameValidation,
  forPasswordValidation,
  forPhoneNumberValidation,
} from "./global_schema";

export const registrationValidation = z
  .object({
    firstName: forNameSrnameValidation,
    lastName: forNameSrnameValidation,
    email: forEmailValidation,
    phoneNumber: forPhoneNumberValidation,
    password: forPasswordValidation,
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .superRefine((data, ctx) => {
    if (
      data.password &&
      data.confirmPassword &&
      data.password !== data.confirmPassword
    ) {
      ctx.addIssue({
        path: ["confirmPassword"],
        code: "custom",
        message: "Passwords don't match",
      });
    }
  });

export type RegistrationValidationType = z.infer<typeof registrationValidation>;
