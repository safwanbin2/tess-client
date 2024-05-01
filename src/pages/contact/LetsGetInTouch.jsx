import fixedbg from "../../assets/fixedbg.jpg";

const LetsGetInTouch = () => {
  return (
    <>
      <div className="py-40 w-full min-h-screen flex justify-center items-center">
        <div className="w-11/12 mx-auto space-y-10">
          <h1 className="text-white text-8xl leading-[7rem]">
            Let's get <br /> in touch
          </h1>
          <div className="text-white grid grid-cols-3 gap-24">
            <div className="col-span-2">
              <img src={fixedbg} alt="" />
            </div>
            <div className="space-y-14">
              <div className="space-y-4">
                <h3 className="text-blue-600 text-sm">Other Contacts</h3>
                <div className="space-y-1 text-gray-300">
                  <p>+60374802492</p>
                  <p>business@tess.gg</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-blue-600 text-sm">Location</h3>
                <div className="space-y-1 text-gray-300">
                  <p>The Dune @ Oasis Square</p>
                  <p>Block A, A-05-08, 2, Jalan PJU 1A/7A,</p>
                  <p>Ara Damansara, 47301 Petaling Jaya,</p>
                  <p>Selangor, Malaysia.</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-blue-600 text-sm">Opening Hours</h3>
                <div className="space-y-1 text-gray-300">
                  <p>Monday - Friday : 9:00 - 18:00</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-blue-600 text-sm">Closed</h3>
                <div className="space-y-1 text-gray-300">
                  <p>Saturday & Sunday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsGetInTouch;
