"use client";
import styles from "./Promotions.module.css";

import Input from "../../shared/form/input/Input";
import { useForm } from "react-hook-form";

function Promotions() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: { email: string }) => {
    console.log("email", data);
  };
  return (
    <div className="promotions__form">
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form__inner">
            <Input
              register={register}
              key="email"
              name="email"
              placeholder={"Написати повідомлення"}
              type="text"
              className=""
              errors={errors}
            />
            {/* <Button type="submit">
              <img src={SendMessageIcon} alt="send message" />
            </Button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Promotions;
