import React, { useState } from "react";
import { Content, Form } from "./style";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generics";
import useRequest from "../../hooks/useRequest";
import { message } from "antd";

export const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const request = useRequest();
  const navigate = useNavigate();

  const authSuccess = () => {
    message.success("Successfully signed in")
  }
  const authWarning = () => {
    message.error("User not found")
  }

  const error = () => {
    message.error("Server error")
  }
  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log("ishladi");
    const data = evt.target.elements;
    const body = {
      email: data.email.value,
      password: data.password.value,
    }
    if(body.email !== "" && body.password !== "") {
    setIsLoading(true);

    request({
      url: "/public/auth/login",
      method: "POST",
      body: body
    }).then(res => {
      if (res.authenticationToken) {
        authSuccess();
        localStorage.setItem("token", JSON.stringify(res.authenticationToken));
        navigate("/home");
      } else {
        authWarning();
      }
    })
    .catch(() => error())
    .finally(() => setIsLoading(false))
  }
  }

  return (
    <Content>
      <div className="subTitle">Sing in</div>
      <Form onSubmit={onSubmit}>
        <Input name="email" placeholder="email" type="email" required={true} />
        <Input name="password" placeholder="password" type="password" required={true} />
        <Button width="%" htmlType="submit" isLoading={isLoading}>
          Submit
        </Button>
      </Form>
    </Content>
  );
};

export default Signin;