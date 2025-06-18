import staticText from "@/lib/locales/fr/static-text";
import { z } from "zod";
import { UserSchemaType } from "@/domain/entities/user";

const arePasswordsEqualSuperRefine = (
  ctx: z.RefinementCtx,
  data: { password: UserSchemaType["password"]; passwordConfirmation: UserSchemaType["password"] }
) => {
  if (data.password !== data.passwordConfirmation) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: staticText.user.zod_error_messages.password_confirmation_invalid,
      path: ["passwordConfirmation"],
    });
  }
};

export { arePasswordsEqualSuperRefine };