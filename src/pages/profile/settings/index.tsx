import AppShell from "@/components/AppShell";
import PageTitle from "@/components/PageTitle";
import styles from "./Settings.module.css";
import SettingsProfile from "@/components/SettingsProfile";
import SettingsMenu from "./SettingsMenu";

const Settings = () => {
  return (
    <>
      <AppShell title={<PageTitle className={styles.title} text="SETTINGS" />}>
        <div>
          <SettingsProfile src="/jojo.jpg" userName="Allen" />
        </div>
        <SettingsMenu/>
      </AppShell>
    </>
  );
};

export default Settings;
