import styles from "./ProfilePage.module.scss";

const ProfilePage = () => {
    return (
        <section className={styles.profile}>
            <ul className={`${styles.profile__menu}`}>
                <li className={styles.profile__menu__item}>Profile</li>
                <li className={styles.profile__menu__item}>Order history</li>
                <li className={styles.profile__menu__item}>Exit</li>
                <li className={styles.profile__menu__description}>
                    In this section you can edit your personal data
                </li>
            </ul>
            <div className="ml-15">
                <input
                    type="text"
                    placeholder="Name"
                    className={`${styles.profile__input}`}
                />
                <input
                    type="text"
                    placeholder="Login"
                    className={`${styles.profile__input} mt-6 `}
                />
                <input
                    type="text"
                    placeholder="Password"
                    className={`${styles.profile__input} mt-6 `}
                />
            </div>
        </section>
    );
};

export default ProfilePage;
