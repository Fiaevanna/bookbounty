import AppShell from "@/components/AppShell";
import styles from "./Profile.module.css";
import UserContent from "./UserContent";
import PageTitle from "@/components/PageTitle";

const Profile = () => {
  return (
    <>
      <AppShell  title={<PageTitle text="PROFILE" />}>
       <UserContent/>
      </AppShell>
    </>
  );
};

export default Profile;
