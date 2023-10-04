function LeftSideBar() {
  const closeMe = () => {
    let menuIcon = document.getElementById("menuIcon");
    menuIcon.click();
  };

  return (
    <div
      className="leftSide flex flex-col justify-start align-start"
      id="leftSide"
    >
      <div className="left-side-header">
        <h1>Club's Name</h1>
      </div>
      <div className="nav-bar">
        <ul className="nav-links">
          <li
            className="flex flex-row justify-start align-center"
            onClick={closeMe}
          >
            <i className="fa-solid fa-house fa-lg"></i>
            <a href="#home" className="ml-1">
              Home
            </a>
          </li>
          <li
            className="flex flex-row justify-start align-center"
            onClick={closeMe}
          >
            <i className="fa-solid fa-circle-info fa-lg"></i>
            <a href="#about" className="ml-1">
              About
            </a>
          </li>
          <li
            className="flex flex-row justify-start align-center"
            onClick={closeMe}
          >
            <i className="fa-solid fa-calendar-days fa-lg"></i>
            <a href="#events" className="ml-1">
              Events
            </a>
          </li>
          <li
            className="flex flex-row justify-start align-center"
            onClick={closeMe}
          >
            <i className="fa-solid fa-image fa-lg"></i>
            <a href="#gallery" className="ml-1">
              Gallery
            </a>
          </li>
          <li
            className="flex flex-row justify-start align-center"
            onClick={closeMe}
          >
            <i class="fa-solid fa-people-group fa-lg"></i>
            <a href="#team" className="ml-1">
              Team
            </a>
          </li>
          <li
            className="flex flex-row justify-start align-center"
            onClick={closeMe}
          >
            <i className="fa-solid fa-phone fa-lg"></i>
            <a href="#contact" className="ml-1">
              Contact
            </a>
          </li>
        </ul>
        <ul className="nav-links mt-3">
          <li
            className="flex flex-row justify-start align-center"
            onClick={closeMe}
          >
            <i class="fa-solid fa-newspaper fa-lg"></i>
            <a href="#latestnews" className="ml-1">
              Latest News
            </a>
          </li>
          <li
            className="flex flex-row justify-start align-center"
            onClick={closeMe}
          >
            <i className="fa-solid fa-bullhorn fa-lg"></i>
            <a href="#announcements" className="ml-1">
              Announcements
            </a>
          </li>
          <li
            className="flex flex-row justify-start align-center"
            onClick={closeMe}
          >
            <i className="fa-solid fa-comments fa-lg"></i>
            <a href="#help" className="ml-1">
              Help & FAQ's
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="social-media flex flex-row justify-start align-center">
                <i className="fa-brands fa-instagram fa-2x ml-1"></i>
                <i className="fa-brands fa-linkedin-in fa-2x ml-1"></i>
                <i class="fa-brands fa-twitter fa-2x ml-1"></i>
            </div> */}
    </div>
  );
}

export default LeftSideBar;
