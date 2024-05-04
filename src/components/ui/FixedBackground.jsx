/* eslint-disable react/prop-types */
const FixedBackground = ({ bgImage }) => {
  return (
    <div className="fixed min-h-screen w-full top-0 left-0 -z-10">
      <div
        className="fixed-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
    </div>
  );
};

export default FixedBackground;
