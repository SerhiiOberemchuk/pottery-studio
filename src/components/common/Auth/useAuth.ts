"use client";
import { useState, useMemo, useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

import { RegisterProps } from "@/components/shared/form/input/Input";
import { CheckboxRegisterProps } from "@/components/shared/form/checkbjx/Checkbox";

// type: "signUp" | "logIn" | "forgotPassword" | "resetPassword"

function useAuth(
  type: "signUp" | "logIn" | "forgotPassword" | "resetPassword"
) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const formConfigs = useMemo(() => {
    return {
      signUp: {
        defaultValues: {
          email: "",
          password: "",
          confirmPassword: "",
          name: "",
          privacyPolicy: false,
          news: false,
        },
      },
      logIn: {
        defaultValues: {
          email: "",
          password: "",
          confirmPassword: "",
          name: "",
          privacyPolicy: false,
          news: false,
        },
      },
      forgotPassword: {
        defaultValues: {
          email: "",
        },
      },
      resetPassword: {
        defaultValues: {
          password: "",
          confirmPassword: "",
        },
      },
    };
  }, []);

  const initDefaultValues = formConfigs[type]?.defaultValues;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<RegisterProps & CheckboxRegisterProps>({
    defaultValues: initDefaultValues,
    mode: "onBlur",
  });

  const isCleanInputsForm = useCallback(() => {
    const emailWatch = watch("email");
    const passwordWatch = watch("password");
    const confirmPasswordWatch = watch("confirmPassword");
    const nameWatch = watch("name");
    const privacyPolicyWatch = watch("privacyPolicy");

    switch (type) {
      case "signUp":
        return (
          !emailWatch ||
          !passwordWatch ||
          !confirmPasswordWatch ||
          !nameWatch ||
          !privacyPolicyWatch
        );

      default:
        return false;
    }
  }, [watch, type]);

  const onSubmit: SubmitHandler<RegisterProps & CheckboxRegisterProps> = (
    data
  ) => {
    console.log("isLoading", isLoading);
    console.log("data", data);
    if (type === "forgotPassword") {
      alert("forgot password Succes");
      router.push("/reset_password");
    }
    reset();
  };
  return {
    register,
    handleSubmit,
    reset,
    errors,
    onSubmit,
  };
}

export default useAuth;
