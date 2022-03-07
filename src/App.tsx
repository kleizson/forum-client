import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";

import SignIn from "./pages/signIn";
import Home from "./pages/home";
import { AuthProvider } from "./contexts/authContext";
import Header from "./components/header";
import CreateCategory from "./pages/manageCategory";
import LoggedRoute from "./components/loggedRoute";
import AuthorizedRoute from "./components/authorizedRoute";
import CreateQuestion from "./pages/createQuestion";
import Question from "./pages/question";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route
            path="/"
            element={
              <LoggedRoute>
                <Home />
              </LoggedRoute>
            }
          />
          <Route
            path="/manage-categories"
            element={
              <AuthorizedRoute>
                <CreateCategory />
              </AuthorizedRoute>
            }
          />
          <Route
            path="/create-question"
            element={
              <LoggedRoute>
                <CreateQuestion />
              </LoggedRoute>
            }
          />
          <Route
            path="/question/:uid"
            element={
              <LoggedRoute>
                <Question />
              </LoggedRoute>
            }
          />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
