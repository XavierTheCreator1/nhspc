import Navbar from "@/app/components/home/Navbar";
import Welcome from "@/app/components/home/Welcome";
import Footer from "@/app/components/home/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Welcome />
      </main>
      <Footer />
    </>
  );
}
