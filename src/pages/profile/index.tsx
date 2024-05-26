import AppShell from "@/components/AppShell";
import PageTitle from "@/components/PageTitle";
import SettingsProfile from "@/components/SettingsProfile";
import Menu from "./Menu";

const Profile = () => {
  return (
    <>
      <AppShell title={<PageTitle text="PROFILE" />}>
        <SettingsProfile  src="/static/jojo.jpg" userName="Allen" />
        <Menu />
      </AppShell>
    </>
  );
};

export default Profile;
