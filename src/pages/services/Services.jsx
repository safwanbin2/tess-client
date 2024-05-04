import { useEffect } from "react";
import FixedBackground from "../../components/ui/FixedBackground";
import TechnicalSolutions from "./TechnicalSolutions";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <TechnicalSolutions />
      </div>
      <FixedBackground bgImage="/bg4.jpg" />
    </>
  );
};

export default Services;
