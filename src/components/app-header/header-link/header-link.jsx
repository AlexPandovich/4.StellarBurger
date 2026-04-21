import { NavLink } from "react-router-dom";
import styles from "./header-link.module.scss";

const HeaderLink = ({ path, Icon, text }) => {
  return (
    <NavLink to={path} className={`${styles.link} `}>
      {({ isActive }) => (
        <>
          <Icon type={isActive ? "primary" : "secondary"} className="outline" />
          <span className={isActive ? styles.active : styles.inactive}>
            {text}
          </span>
        </>
      )}
    </NavLink>
  );
};

export default HeaderLink;
