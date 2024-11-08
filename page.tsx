import Image from "next/image";
import Navbar from "./componemts/Navbar";
 import Heading from "./componemts/Heading";
import ProudPage from "./componemts/Proud";
import Getstarted from "./componemts/Getstarted";
import Program from "./componemts/Program";
import Zoom from "./componemts/Zoom";
import Upcomingevent from "./componemts/Upcomingevent";

export default function Home() {
  return (
   
    <>
    <Navbar/> <br /> <br />
     <Heading/> <br />
     <ProudPage/>
     <Getstarted/> <br />
     <Program/>
     <Zoom/>
     <Upcomingevent/>
    </>
  );
}
