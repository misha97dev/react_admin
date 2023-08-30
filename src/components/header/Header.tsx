import "./header.css";
const Header = () => {
  return (
    <div className="text-white p-4 flex gap-8 items-center justify-between ">
      <div className="flex gap-4 ">
        <img className="w-[50px]" src="/assets/images/main_logo.png" alt="" />
        <h2 className="text-[28px] font-semibold ">Admin panel</h2>
      </div>
      <div className="flex gap-6 items-center header__icons">
        <img src="/assets/icons/search.svg" alt="" />
        <img src="/assets/icons/app.svg" alt="" />
        <img src="/assets/icons/expand.svg" alt="" />
        <div className="relative">
          <img src="/assets/icons/notifications.svg" alt="" />
          <span className="absolute top-[-8px] right-[-8px] bg-red-500  w-[14px] h-[14px] leading-[14px] rounded-full text-[12px] font-semibold text-center">
            1
          </span>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="/assets/images/avatar.jpeg"
            alt=""
            className="w-[44px]  rounded-full object-contain header__avatar"
          />
          <h3>Username</h3>
        </div>
        <img src="/assets/icons/settings.svg" alt="" />
      </div>
    </div>
  );
};

export default Header;
