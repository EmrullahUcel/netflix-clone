import Data from "/public/notificatiosdata/notificationsData.js";
import { useState } from "react";


const Notifications = () => {


  const [open, setOpen] = useState(false);

  const hover = () => {
    setOpen(true);
  };
  const leave = () => {
    setTimeout(() => {
      setOpen(false);
    }, 550);
  };

  return (
    <div className="relative z-20">
      <div className="relative">
        <svg className="w-6 h-6 cursor-pointer" onMouseEnter={hover}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z"
            fill="#fff"
          ></path>
        </svg>
      </div>
      <div
        className={`${
          open ? "" : "hidden"
        } absolute  z-10 max-h-[500px] w-[400px] ml-[-380px] mt-[20px] border  border-white overflow-auto `}
        onMouseLeave={leave}
      >
        {Data.map((not) => {
          return (
            <div
              key={not.id}
              className="w-full border-b-2 h-[100px] flex bg-[#100e0e] bg-opacity-90 opacity-90 hover:bg-black cursor-pointer"
            >
              <div className="w-[120px] flex justify-center items-center">
                <img
                  className="w-24 h-16 rounded-lg"
                  src={not.image}
                  alt={not.image}
                />
              </div>
              <div className="flex-1 flex flex-col justify-center text-[#]">
                <h3>{not.status} </h3>
                <p>{not.title} </p>
                <span className="text-xs text-gray-400 ">
                  {not.description}{" "}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;
