import React from "react";
import { UserContext } from "../hook/ContextApi";
import { Navigate, Outlet } from "react-router-dom";

const Protected = (children) => {
  const [Verified, setVerified] = React.useContext(UserContext);

  // const login = getValue("email", "password");
  if (Verified) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};

export default Protected;
