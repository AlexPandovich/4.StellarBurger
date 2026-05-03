import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const GuestsRouteElement = ({ element }) => {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  console.log("guests route ", location);

  return !user.userName ? (
    element
  ) : (
    <Navigate to={location.state.destination} replace />
  );
};
