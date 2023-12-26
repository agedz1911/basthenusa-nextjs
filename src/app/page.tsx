import Divider from "@/components/Divider";
import ToTopButton from "@/components/ToTopButton";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="p-0">
      <Hero />
      <Divider />
      <Features />

      <Footer />
      <ToTopButton />
    </div>
  );
}
