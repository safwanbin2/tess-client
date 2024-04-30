import FixedBackground from "../../components/ui/FixedBackground";
import Expertise from "./Expertise";
import Hero from "./Hero";
import LetsTalk from "./LetsTalk";
import PastWorks from "./PastWorks";
import PreviousClients from "./PreviousClients";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <PastWorks />
        <Expertise />
        <div className="h-[2px] bg-gray-900 w-11/12 mx-auto"></div>
        <PreviousClients />
        <LetsTalk />
      </div>
      <FixedBackground />
    </>
  );
};

export default Home;
