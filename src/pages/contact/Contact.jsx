import { useEffect } from "react";
import FixedBackground from "../../components/ui/FixedBackground";
import LetsGetInTouch from "./LetsGetInTouch";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <LetsGetInTouch />
      </div>
      <FixedBackground bgImage="/bg.jpg" />
    </>
  );
};

export default Contact;
