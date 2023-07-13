import React from "react";
import { Content, Form } from "./style";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generics";
import useRequest from "../../hooks/useRequest";
import { message } from "antd";
import { useContext } from "react";
import { PropertiesContext } from "../../context/properties";
import { TAB_TYPE } from "../../utils/types";

export const Signup = () => {
  const request = useRequest();
  const navigate = useNavigate();

  const [, dispatch] = useContext(PropertiesContext);


  const info = () => {
    message.success("Successfylly signed up");
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    const data = evt.target.elements;
    const body = {
      email: data.email.value,
      firstname: data.firstname.value,
      lastname: data.lastname.value,
      password: data.password.value,
      roleIdSet: [0]
    }

    request({
      url: "/public/auth/register",
      method: "POST",
      body: body
    }).then(res => {
      info();
      dispatch({ type: TAB_TYPE, payload: { tab: "1" } })
    })

  };


  return (
    <Content>
      <div className="subTitle">Sing up</div>
      <Form onSubmit={onSubmit}>
        <Input name="email" placeholder="email" type="email" />
        <Input name="firstname" placeholder="firstname" type="text" />
        <Input name="lastname" placeholder="lastname" type="text" />
        <Input name="password" placeholder="password" type="password" />
        <Button width="%" type="submit">
          Login
        </Button>
      </Form>
    </Content>
  );
};

export default Signup;