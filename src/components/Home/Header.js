import LeftSideBar from "./LeftSidebar";
import logo from "./logo.png";

const showLeft = () => {
  const leftSideNav = document.getElementById("leftSide");
  leftSideNav.classList.toggle("showNav");
};

const changeBg = () => {
  let header = document.getElementById("header");
  let scrollUpBtn = document.getElementById("scrollUpBtn");
  if (window.scrollY >= 250) {
    header.classList.add("active");
    scrollUpBtn.classList.add("visible");
  } else {
    header.classList.remove("active");
    scrollUpBtn.classList.remove("visible");
  }
};
window.addEventListener("scroll", changeBg);

function Header() {
  return (
    <div
      className="header flex flex-row justify-between align-center"
      id="header"
    >
      <div class="headDiv ml-1 flex flex-row align-center justify-start">
        <img src={logo} alt="logo" />
      </div>
      <div
        className="menu-icon mr-1 flex flex-row justify-between align-center"
        id="menuIcon"
        onClick={showLeft}
      >
        <div className="">
          <h1>
            <span className="changeIt" id="changeIt">
              MENU
            </span>
          </h1>
        </div>
        <i class="fa-solid fa-bars fa-2x"></i>
      </div>
      <LeftSideBar />
    </div>
  );
}

export default Header;
