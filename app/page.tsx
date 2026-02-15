import Link from "next/link";
import Mmenu from "./components/Mmenu"
import Banner from "./components/Banner";
import Card from "./components/Card";
import Service from "./components/Service";
import Exfooter from "./components/Exfooter";
import Footer from "./components/Footer";
import Topper from "./components/Topper";
import DoctorsSay from "./components/Doctor";
import GoogleMap from "./components/Googlemap";
import Googlemap from "./components/Googlemap";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/h.jpeg')" }}>
      <div className="bg-white/50">
        <Topper />
        <Mmenu />
        <Banner />
        <Card />
        <Service />
        <DoctorsSay />
        <FAQ/>
        <Googlemap />
        <Footer />
      </div>
    </main>
  );
}

