"use client";
import { useState, useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { RegisterProps } from "@/components/shared/form/input/Input";
import { CheckboxRegisterProps } from "@/components/shared/form/checkbjx/Checkbox";

function useAuth(
  type: "signUp" | "logIn" | "forgotPassword" | "resetPassword"
) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formConfigs = useMemo(() => {
    return {
      signUp: {
        defaultValues: {
          email: "",
          password: "",
          confirmPassword: "",
          terms: false,
        },
        schema: SignUpSchema,
      },
      logIn: {
        defaultValues: {
          email: "",
          password: "",
        },
        schema: LogInSchema,
      },
      forgotPassword: {
        defaultValues: {
          email: "",
        },
        schema: ForgotPasswordSchema,
      },
      resetPassword: {
        defaultValues: {
          password: "",
          confirmPassword: "",
        },
        schema: ResetPasswordSchema,
      },
    };
  }, []);

  const initsSchema = formConfigs[type].schema;
  const initDefaultValues = formConfigs[type].defaultValues;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof initsSchema>>({
    defaultValues: initDefaultValues,
    resolver: zodResolver(initsSchema),
    mode: "onBlur",
  });

  const isCleanInputsForm = useCallback(() => {
    const emailWatch = watch("email");
    const passwordWatch = watch("password");
    const confirmPasswordWatch = watch("confirmPassword");
    const termsWatch = watch("terms");

    switch (type) {
      case "signUp":
        return (
          !emailWatch || !passwordWatch || !confirmPasswordWatch || !termsWatch
        );

      case "logIn":
        return !emailWatch || !passwordWatch;

      case "forgotPassword":
        return !emailWatch;

      case "resetPassword":
        return !passwordWatch || !confirmPasswordWatch;

      default:
        return false;
    }
  }, [watch, type]);

  const onSubmit: SubmitHandler<RegisterProps> = (data) => {
    console.log("email", data);
    reset();
  };
  console.log(type);
  return {
    register,
    handleSubmit,
    reset,
    errors,
    onSubmit,
  };
}

export default useAuth;
