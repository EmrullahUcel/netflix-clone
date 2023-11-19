import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "/src/store/userslice/userSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [auth, setAuth] = useState({
    name: "",
    password: null,
  });
  const isLogin = useSelector((state) => state.userSlice.isLogin);

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
  }

  const navigate = useNavigate();
  const handleAuth = (e) => {
    const { name, value } = e.target;
    setAuth({ ...auth, [name]: value });
  };

  useEffect(() => {
    if (isLogin) {
      navigate("users");
    } else {
      navigate("/");
    }
  }, [isLogin]);

  return (
    <div className="w-[450px] flex min-h-screen z-30 md:bg-black md:w-full ">
      <div className=" bg-black bg-opacity-[0.75] h-[660px] w-full items-start pt-[60px] px-16">
        <div className=" flex flex-col h-[334px] gap-5">
          <h1 className="text-[32px] font-semibold">Oturum Aç</h1>
          <form
            onSubmit={handleSubmit}
            className="text-black flex flex-col gap-5"
          >
            <div className="w-full h-[50px] bg-white rounded-md">
              <span className="pl-5 text-[12px] font-normal">
                E-posta veya telefon numarası
              </span>
              <input
                type="text"
                name="name"
                className="w-full focus-within:outline-none pl-5 rounded-md font-normal"
                onChange={handleAuth}
              />
            </div>
            <div className="w-full h-[50px] bg-white rounded-md">
              <span className="pl-5 text-[12px] font-normal">Parola</span>
              <input
                name="password"
                type="password"
                className="w-full focus-within:outline-none pl-5 rounded-md font-extrabold"
                onChange={handleAuth}
              />
            </div>
            <button
              type="submit"
              onClick={() => dispatch(loginUser(auth))}
              className="bg-[#E50914] text-white font-bold rounded-[4px] mt-6 p-[13px]"
            >
              Oturum Aç
            </button>
            <div className="flex text-white mb-[-5px] h-[18px] justify-between items-center">
              <label className="text-[14px] text-[#B3B3B3] flex justify-center items-center">
                <input type="checkbox" className="" />
                Beni hatırla
              </label>
              <a className="text-[13px] text-[#B3B3B3]" href="#">
                Yardım ister misiniz?
              </a>
            </div>
          </form>
        </div>
        <div className="text-[#B3B3B3] h-[226px] mt-4">
          <div>
            Netflix'e katılmak ister misiniz?{" "}
            <a className="text-white" href="">
              Şimdi kaydolun.
            </a>
          </div>
          <div className="mt-3 text-[13px] text-[#8C8C8C]">
            Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA
            tarafından korunuyor.
            <div>
              <a className="text-[#0071EB] text-[13px] mt-[-15px]" href="">
                Daha fazlasını öğrenin.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
