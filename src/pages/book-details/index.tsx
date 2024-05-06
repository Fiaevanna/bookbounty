import AppShell from "@/components/AppShell";
import PageTitle from "@/components/PageTitle";
import UserInfoBookDetails from "@/pages/book-details/_components/UserInfoBookDetails";
const BookDetails = () => {
  return (
    <>
      <AppShell title={<PageTitle text="BOOK DETAILS" />}>
        <UserInfoBookDetails />
      </AppShell>
    </>
  );
};

export default BookDetails;
