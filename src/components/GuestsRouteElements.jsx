import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const GuestsRouteElement = ({ element }) => {
  const user = useSelector((state) => state.user);

  return !user.userName ? element : <Navigate to="/" replace />;
};
