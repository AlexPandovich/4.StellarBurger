import styles from "./ProfilePage.module.scss";

const ProfileOutlet = () => {
  return (
    <>
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
    </>
  );
};

export default ProfileOutlet;
