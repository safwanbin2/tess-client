import tree from "../../assets/tree.png";

const Tree = () => {
  return (
    <>
      <div className="pt-24 w-full min-h-[60vh] md:min-h-screen flex justify-center items-center">
        <div className="w-11/12 md:w-9/12 mx-auto text-white space-y-10 flex flex-col justify-center items-center">
          <p className="text-gray-300 text-base text-center">
            Our{" "}
            <span className="text-violet-500 font-semibold text-lg">
              ecosystem:{" "}
            </span>
            A unified network enhanching service delivery
          </p>
          <img src={tree} alt="" className="rounded-md" />
        </div>
      </div>
    </>
  );
};

export default Tree;
