"use client";
import { useState, useMemo, useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

import { RegisterProps } from "@/components/shared/form/input/Input";
import { CheckboxRegisterProps } from "@/components/shared/form/checkbox/Checkbox";

// alex
import { useAuthStore } from "@/store/user-store";

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

  const { logIn, } = useAuthStore();

  const onSubmit: SubmitHandler<RegisterProps & CheckboxRegisterProps> =
    useCallback(
      async (data) => {
        setIsLoading(true);
        try {
          switch (type) {
            case "logIn":
              if ("email" in data && "password" in data) {
                await logIn({
                  email: data.email,
                  password: data.password,
                });
                break;
              }
              throw new Error("Missing email or password for sign-up or login");
            case "forgotPassword":
              alert("forgot password Succes");
              router.push("/reset_password");
              break;
            default:
              throw new Error("Unknown form type");
          }
        } catch (error) {
          console.error("Submission failed:", error);
        }
        reset();
        setIsLoading(false);
      },
      [logIn, type, reset, router]
    );

  return {
    register,
    handleSubmit,
    reset,
    errors,
    onSubmit,
    isCleanInputsForm,
    isLoading,
  };
}

export default useAuth;
