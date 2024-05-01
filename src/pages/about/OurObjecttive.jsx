const OurObjecttive = () => {
  return (
    <>
      <div className="pt-24 w-full min-h-screen flex justify-center items-center">
        <div className="w-11/12 mx-auto text-white space-y-10">
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold leading-[2.8rem] tracking-wider text-violet-500">
              Our Objecttive
            </h1>
            <p className="text-gray-300">
              We assist companies by identifying and addressing{" "}
              <span className="text-violet-500 font-semibold text-lg">
                targeted issues
              </span>
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-10">
                      <div className="avatar text-2xl">1</div>
                      <div className="text-base text-violet-500">
                        <div className="font-bold">Steamline &</div>
                        <div className="font-bold">profitablility</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <ul>
                      <li className="list-disc">
                        Enhance effeciency by simplifying processes and reducing
                        unnecessary steps.
                      </li>
                      <li className="list-disc">
                        Increasing earnings through cost reduction, revenue
                        enhancement, and operational effeciency
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-10">
                      <div className="avatar text-2xl">2</div>
                      <div className="text-base text-violet-500">
                        <div className="font-bold">Digital traditional</div>
                        <div className="font-bold">Companies</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <ul>
                      <li className="list-disc">
                        Incorporating digital technology to improve effeciency,
                        enhance processes transform operations
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-10">
                      <div className="avatar text-2xl">3</div>
                      <div className="text-base text-violet-500">
                        <div className="font-bold">Innovate & incorporate</div>
                        <div className="font-bold">new technologies</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <ul>
                      <li className="list-disc">
                        Introducing new ideas, methods, or devices to improve
                        products, services, or processes.
                      </li>
                      <li className="list-disc">
                        Integrating the latest technologies into business
                        operatins to stay competitive and meet evolving needs.
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-10">
                      <div className="avatar text-2xl">4</div>
                      <div className="text-base text-violet-500">
                        <div className="font-bold">Cross-selling & cost</div>
                        <div className="font-bold">harmonization</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <ul>
                      <li className="list-disc">
                        Together with our subsidiaries, we are able to actively
                        optimize various internal processes and resources to
                        reduce unnecessary expenses, which results in a much
                        competitive pricing.
                      </li>
                      <li className="list-disc">
                        We not only focus on cost reduction, but also prioritize
                        in adding value, such as a sustainable business model.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurObjecttive;
