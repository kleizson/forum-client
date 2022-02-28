import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";

import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
