import FixedBackground from "../../components/ui/FixedBackground";
import BuildingBetterThings from "./BuildingBetterThings";
import InnovateBuild from "./InnovateBuild";
import OurObjecttive from "./OurObjecttive";
import Tree from "./Tree";
import WeServe from "./WeServe";

const About = () => {
  return (
    <>
      <div>
        <Tree />
        <BuildingBetterThings />
        <InnovateBuild />
        <OurObjecttive />
        <WeServe />
      </div>
      <FixedBackground />
    </>
  );
};

export default About;
