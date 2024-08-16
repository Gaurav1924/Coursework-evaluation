import { Coursework } from "./types";

const CourseworkCard: React.FC<Coursework> = ({
  title,
  subject,
  timeToRead,
  words,
  rating,
  language,
  score,
}) => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const truncatedTitle = truncateText(title, 30);
  console.log(score);
  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 space-y-4 md:space-y-0"
      style={{
        background:
          "linear-gradient(to bottom, #FFFFFF 0%, #F4EAD8 32%, #FFFFFF 64%)",
      }}
      
    >
      <div className="w-full md:w-2/6 hidden lg:block">
        <img
          src="../../assets/essayTemplate.png"
          alt="Document"
          className="rounded-md object-cover w-full"
        />
      </div>
      <div className="w-full md:w-5/6">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 break-all">
          {" "}
          {truncatedTitle}
        </h3>
        <p className="text-gray-500 text-sm mt-1">{truncatedTitle}</p>
        <p className="text-green-600 text-sm font-bold mt-1">
          Score Category: {score?.category}
        </p>
        <div className="flex flex-wrap items-center mt-3 space-x-2">
          <span className="flex items-center text-xs text-[#5b6170] p-1 font-bold rounded-full">
            <img src="../../assets/man.png" alt="" className="mr-1 w-5 h-6" />{" "}
            {subject}
          </span>
          <span className="flex items-center text-xs text-[#5b6170] p-1 font-bold rounded-full">
            <img src="../../assets/clock.png" alt="" className="mr-1 w-5 h-6" />{" "}
            {timeToRead}
          </span>
          <span className="flex items-center text-xs text-[#5b6170] p-1 font-bold rounded-full">
            <img src="../../assets/words.png" alt="" className="mr-1 w-5 h-6" />{" "}
            {words}
          </span>
        </div>
        <div className="flex items-center mt-2">
          <span className="flex items-center text-xs text-yellow-500 p-1 font-bold rounded-full">
            <img src="../../assets/star.png" alt="" className="mr-1 w-5 h-6" />{" "}
            {rating}
          </span>
          <span className="flex items-center text-xs  text-[#5b6170] ml-4 p-1 font-bold rounded-full">
            <img src="../../assets/hand.png" alt="" className="mr-1 w-5 h-6" />{" "}
            {language}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseworkCard;
