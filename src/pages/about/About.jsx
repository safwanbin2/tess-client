import { useEffect } from "react";
import FixedBackground from "../../components/ui/FixedBackground";
import BuildingBetterThings from "./BuildingBetterThings";
import InnovateBuild from "./InnovateBuild";
import OurObjecttive from "./OurObjecttive";
import Tree from "./Tree";
import WeServe from "./WeServe";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <Tree />
        <BuildingBetterThings />
        <InnovateBuild />
        <OurObjecttive />
        <WeServe />
      </div>
      <FixedBackground bgImage="/bg2.jpg" />
    </>
  );
};

export default About;
