import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProfileTabs from "@/components/profile/ProfileTabs";
import UserBio from "@/components/profile/UserBio";
import UserProfile from "@/components/profile/UserProfile";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <Navbar />
      <div className="p-1 sm:p-5 flex w-full items-center justify-center">
        <UserProfile id={params.id} />
      </div>
      <Footer />
    </>
  );
}