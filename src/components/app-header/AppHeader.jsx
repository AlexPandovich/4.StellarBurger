import React from "react";
import styles from "./AppHeader.module.css";
import "@ya.praktikum/react-developer-burger-ui-components";
import {
    Button,
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

class AppHeader extends React.Component {
    render() {
        return (
            <header className="p-4">
                <div className={styles.container}>
                    <div className={styles.button_wrapper}>
                        <Button
                            htmlType="button"
                            type="secondary"
                            size="small"
                            extraClass={`${styles.btn} ${styles.outline} `}
                        >
                            <BurgerIcon
                                type="primary"
                                className={styles.outline}
                            />
                            <span>Order builder</span>
                        </Button>
                        <Button
                            htmlType="button"
                            type="secondary"
                            size="small"
                            extraClass={`${styles.btn} ${styles.outline} `}
                        >
                            <ListIcon
                                type="primary"
                                className={styles.outline}
                            />
                            <span>Order feed</span>
                        </Button>
                    </div>

                    <Logo className={styles.outline} />

                    <Button
                        htmlType="button"
                        type="secondary"
                        size="small"
                        extraClass={`${styles.btn} ${styles.outline} ${styles.personal_account} `}
                    >
                        <ProfileIcon type="primary" />
                        <span>Personal account</span>
                    </Button>
                </div>
            </header>
        );
    }
}

export default AppHeader;
