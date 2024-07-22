import Image from "next/image";
import HeaderMenu from "@/components/header_menu";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col justify-between items-center">
      <HeaderMenu/>
      
      <Footer/>
    </div>
    
  );
}
