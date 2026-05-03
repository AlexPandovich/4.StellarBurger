import { Navigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
export const ProtectedRouteElement = ({ element }) => {
  const user = useSelector((state) => state.user);
  console.log("Protected route", user);
  const location = useLocation();
  console.log("location ", location);

  return user.userName ? (
    element
  ) : (
    <Navigate to="/login" state={{ destination: location.pathname }} replace />
  );
};
