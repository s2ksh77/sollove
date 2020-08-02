import React, { useState } from "react";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(100% - 200px);
`;
const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #000000;
`;
const Text = styled.span`
  display: flex;
  align-items: center;
`;
const ID = styled.input`
  height: 28px;
  margin: 15px;
`;
const Password = styled.input`
  height: 28px;
  margin: 15px;
`;
const Button = styled.button`
  padding: 15px;
  background-color: yellow;
  color: #000000;
`;

const LoginPage = () => {
  const [Id, setId] = useState("");
  const [password, setPassword] = useState("");

  // input tag change
  const inputIdChange = (e) => {
    const {
      target: { value },
    } = e;
    setId(value);
  };
  const inputPasswordChange = (e) => {
    const {
      target: { value },
    } = e;
    setPassword(value);
  };

  // from tag submit
  const onSubmit = (e) => {
    console.log("ID   : ", Id, "Password   : ", password);
    e.preventDefault();
  };

  return (
    <Content>
      <Form onSubmit={onSubmit}>
        <FormContainer>
          <Text>아이디</Text>
          <ID
            type="text"
            value={Id}
            placeholder="아이디를 입력하세요."
            onChange={inputIdChange}
          ></ID>
          <Text>비밀번호</Text>
          <Password
            type="password"
            value={password}
            placeholder="비밀번호를 입력하세요."
            onChange={inputPasswordChange}
          ></Password>
          <Button onClick={onSubmit}>Login</Button>
        </FormContainer>
      </Form>
    </Content>
  );
};

export default LoginPage;
