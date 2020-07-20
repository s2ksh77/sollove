import React, { useState } from "react";
import LoginPage from "./Login/Login";

function App() {
  const [isLogin, setLogin] = useState(false);
  return <>{isLogin ? "Hello~~!" : <LoginPage />}</>;
}

export default App;
