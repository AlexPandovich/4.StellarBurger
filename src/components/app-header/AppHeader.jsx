import React from "react";
import styles from "./AppHeader.module.scss";

import {
    Button,
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
    return (
        <header className="p-4">
            <div className={`${styles.container} container`}>
                <div className={styles.button_wrapper}>
                    <Button
                        htmlType="button"
                        type="secondary"
                        size="small"
                        extraClass={`${styles.btn} ${styles.outline} `}
                    >
                        <BurgerIcon type="primary" className="outline" />
                        <span>Order builder</span>
                    </Button>
                    <Button
                        htmlType="button"
                        type="secondary"
                        size="small"
                        extraClass={`${styles.btn} ${styles.outline} `}
                    >
                        <ListIcon type="primary" className="outline" />
                        <span>Order feed</span>
                    </Button>
                </div>

                <Logo className="outline" />

                <Button
                    htmlType="button"
                    type="secondary"
                    size="small"
                    extraClass={`${styles.btn} ${styles.outline} ${styles.personal_account} `}
                >
                    <ProfileIcon type="primary" className="outline" />
                    <span>Personal account</span>
                </Button>
            </div>
        </header>
    );
};

export default React.memo(AppHeader);
