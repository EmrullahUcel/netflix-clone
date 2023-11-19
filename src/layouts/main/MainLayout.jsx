import Navbar from "../navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="w-full h-screen  ">
      <Navbar />
      <div className="w-full h-full flex justify-center items-center text-white">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
