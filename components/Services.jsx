import ProgressBar from "@ramonak/react-progress-bar";

const Services = () => {
  return (
    <div className="flex items-center p-20 bg-gray-200 rounded-md gap-5 ">
      <div className="w-[50%] flex flex-col gap-10">
        <div>
          <p>HTML</p>
          <ProgressBar completed={90} completedClassName="barCompleted_1" />
        </div>
        <div>
          <p>CSS</p>
          <ProgressBar completed={90} completedClassName="barCompleted_2" />
        </div>
        <div>
          <p>JAVASCRIPT</p>
          <ProgressBar completed={80} completedClassName="barCompleted_3" />
        </div>
      </div>
      <div className="w-[50%] flex flex-col gap-10">
        <div>
          <p>FIGMA</p>
          <ProgressBar completed={80} completedClassName="barCompleted_4" />
        </div>
        <div>
          <p>REACTJS</p>
          <ProgressBar completed={80} completedClassName="barCompleted_5" />
        </div>
        <div>
          <p>WORDPRESS</p>
          <ProgressBar completed={90} completedClassName="barCompleted_6" />
        </div>
      </div>
    </div>
  );
};

export default Services;
