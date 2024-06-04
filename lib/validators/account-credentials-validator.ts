import { z } from "zod";

export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z.string().min(8, {
        message: "رمز عبور باید بیشتر از 8 کاراکتر باشد"
    }),
});

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>