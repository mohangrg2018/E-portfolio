import ProgressBar from "@ramonak/react-progress-bar";

const Services = () => {
  return (
    <div className="flex items-center p-20 bg-gray-200 rounded-md gap-5 ">
      <div className="w-[50%] flex flex-col gap-10">
        <div>
          <p>HTML</p>
          <ProgressBar completed="60" completedClassName="barCompleted" />
        </div>
        <div>
          <p>HTML</p>
          <ProgressBar completed="60" completedClassName="barCompleted" />
        </div>
        <div>
          <p>HTML</p>
          <ProgressBar completed="60" completedClassName="barCompleted" />
        </div>
      </div>
      <div className="w-[50%] flex flex-col gap-10">
        <div>
          <p>HTML</p>
          <ProgressBar completed="60" completedClassName="barCompleted" />
        </div>
        <div>
          <p>HTML</p>
          <ProgressBar completed="60" completedClassName="barCompleted" />
        </div>
        <div>
          <p>HTML</p>
          <ProgressBar completed="60" completedClassName="barCompleted" />
        </div>
      </div>
    </div>
  );
};

export default Services;
