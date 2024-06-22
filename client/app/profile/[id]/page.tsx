import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProfileTabs from "@/components/profile/ProfileTabs";
import UserBio from "@/components/profile/UserBio";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <Navbar />
      <div className="p-1 sm:p-5 flex w-full items-center justify-center">
        <div className="w-full max-w-xl flex flex-col gap-4">
          <UserBio />
          <ProfileTabs />
        </div>
      </div>
      <Footer />
    </>
  );
}