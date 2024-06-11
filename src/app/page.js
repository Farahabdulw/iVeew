import Image from "next/image";
import Navbar from "../components/Navbar";
import BusinessForm from "../components/BuisnessForm";
import Login from "./login/page";

export default function Home() {
  const cardList1 = ["Confirmation Page Link"];
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow" style={{background: "linear-gradient(to bottom right, #8f8f8f0d, #6b6b6b)", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {/* className="p-10" */}
        <div> 
          <BusinessForm />
        </div>
      </div>
    </main>
  );
}
