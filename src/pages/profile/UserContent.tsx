import UserProfile from "@/components/UserProfile";
import styles from "./UserContent.module.css";

const UserContent = () => {
  return (
    <>
      <div className={styles.userinfo}>
        <UserProfile
          src="/jojo.jpg"
          userName="Allen"
          showMyProfile="Show my profile"
          favorites="Favorites"
          settings="Settings"
          logout="Logout"
        ></UserProfile>
        <div className={styles.userName}></div>
      </div>
    </>
  );
};

export default UserContent;
