import styles from "./burger-tabs.module.scss";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerTabs = (props) => {
    return (
        <section className={`${styles.tabs_wrapper} mt-4`}>
            <Tab
                value="bun"
                active={props.current === "bun"}
                onClick={props.onClick}
            >
                Buns
            </Tab>
            <Tab
                value="sauce"
                active={props.current === "sauce"}
                onClick={props.onClick}
            >
                Sauces
            </Tab>
            <Tab
                value="main"
                active={props.current === "main"}
                onClick={props.onClick}
            >
                Mains
            </Tab>
        </section>
    );
};

export default BurgerTabs;
