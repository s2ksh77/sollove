import React from "react";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;
const Form = styled.form``;
const ID = styled.input``;
const Password = styled.input``;

const LoginPage = () => {
  return (
    <Content>
      <Form>
        <ID type="text" value="" placeholder="please enter your id"></ID>
        <Password
          type="password"
          value=""
          placeholder="please enter your password"
        ></Password>
      </Form>
    </Content>
  );
};

export default LoginPage;
