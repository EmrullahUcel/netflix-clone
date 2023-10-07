import React from "react";

const LoginFooter = () => {
  return (
    <div className="w-full flex justify-center  h-[261px] bg-black bg-opacity-75">
      <div className="text-gray-400 w-[1000px] gap-5 flex flex-col  py-8">
        <div className="text-[16px]">
          <span>
            Sorularınız mı var? 0850-390-7444 numaralı telefonu arayın
          </span>
        </div>
        <div>
          <ul className="flex flex-wrap w-full text-[13px] h-16 ">
            <li className="w-[250px]">
              <span>
                <a href="">SSS</a>
              </span>
            </li>
            <li className="w-[250px]">
              <span>
                <a href="">Yardım Merkezi</a>
              </span>
            </li>
            <li className="w-[250px]">
              <span>
                <a href="">Kullanım Koşulları</a>
              </span>
            </li>
            <li className="w-[250px]">
              <span>
                <a href="">Gizlilik</a>
              </span>
            </li>
            <li className="w-[250px]">
              <span>
                <a href="">Çerez Tercihleri</a>
              </span>
            </li>
            <li className="w-[250px]">
              <span>
                <a href="">Kurumsal Bilgiler</a>
              </span>
            </li>
          </ul>
        </div>
        <div className="relative flex">
          <img
            className="text-white w-4 h-4 absolute top-4 left-3"
            src="/worldicon/worldicon.png"
            alt=""
          />
          <select
            className="w-[121px] h-[47px] bg-black text-gray-400 text-sm pl-11"
            name=""
            id=""
          >
            <option value="">Türkçe</option>
            <option value="">English</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LoginFooter;
