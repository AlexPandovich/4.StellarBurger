import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
export const ProtectedRouteElement = ({ element }) => {
  const user = useSelector((state) => state.user);
  console.log("Protected route", user);

  return user.userName ? element : <Navigate to="/login" replace />;
};
