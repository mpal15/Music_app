import  FearturedCourses  from "../components/FearturedCourses";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Instructors from "../components/Instructor";
import MusicSchoolTestimonials from "../components/TestimonialCards";
import UpcomingWebinars from "../components/UpcomingWebinars";
import  WhyChooseUs  from "../components/WhyChooseUs";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="texrt-2xl text-center">chai aur code</h1>
      <HeroSection/>
      <FearturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}