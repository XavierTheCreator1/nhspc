import Navbar from '@/app/ui/home/Navbar';
import Welcome from '@/app/ui/home/Welcome';
import Footer from '@/app/ui/home/Footer';

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
