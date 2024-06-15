import AppImage from "@/components/landing/AppImage";
import Faqs from "@/components/landing/Faqs";
import Footer from "@/components/Footer";
import Landing from "@/components/landing/Landing";
import Process from "@/components/landing/Process";
import Navbar from "@/components/Navbar";
import UpcomingAuctions from "@/components/landing/UpcomingAuctions";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Process />
      <AppImage />
      <UpcomingAuctions />
      <Faqs />
      <Footer /> 
    </>
  );
}
