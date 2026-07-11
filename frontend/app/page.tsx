import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedServices from "@/components/FeaturedServices";
import Categories from "@/components/Categories";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedServices />
      <ServiceGrid />
      <Categories />
      <WhyChooseUs />
      <Footer />
    </>
  );
}