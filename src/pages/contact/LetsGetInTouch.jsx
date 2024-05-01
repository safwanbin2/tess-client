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
              {/* <img src={fixedbg} alt="" /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.928559825843!2d101.57309377401592!3d3.113603653372113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc478a74d8757f%3A0xab5f9be343574117!2sThe%20Dune%20%40%20Oasis%20Square!5e0!3m2!1sen!2sbd!4v1714538161588!5m2!1sen!2sbd"
                // width="600"
                // height="450"
                style={{ border: "0px" }}
                className="w-full h-full rounded-2xl"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
