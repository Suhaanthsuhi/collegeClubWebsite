function Latestnews() {
  return (
    <div className="latest-news-page flex flex-col" id="latestnews">
      <div className="newspage-head flex flex-col justify-start align-center">
        <h1>LATEST NEWS</h1>
        <h3>--New Updates--</h3>
      </div>
      <div className="newspage-body flex flex-col align-center justify-center">
        <div className="news-cont bb flex flex-row justify-start align-center">
          <div className="news-cont-left flex justify-center align-center">
            <i class="fa-regular fa-newspaper fa-2x"></i>
          </div>
          <div className="news-cont-mid">
            <p className="news-content text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
              quidem?
              <div>
                DATE: 24/01/2023
              </div>
            </p>
            <a href="...">Click here</a>
          </div>
          <div className="news-cont-right bb">
            <span className="new-tag">NEW</span>
          </div>
        </div>
        <div className="news-cont bb flex flex-row justify-start align-center">
          <div className="news-cont-left flex justify-center align-center">
            <i class="fa-regular fa-newspaper fa-2x"></i>
          </div>
          <div className="news-cont-mid">
            <p className="news-content text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
              quidem?
              <div>
                DATE: 24/01/2023
              </div>
            </p>
            <a href="...">Click here</a>
          </div>
          <div className="news-cont-right bb">
            <span className="new-tag">NEW</span>
          </div>
        </div>
        <div className="news-cont bb flex flex-row justify-start align-center">
          <div className="news-cont-left flex justify-center align-center">
            <i class="fa-regular fa-newspaper fa-2x"></i>
          </div>
          <div className="news-cont-mid">
            <p className="news-content text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
              quidem?
              <div>
                DATE: 22/01/2023
              </div>
            </p>
            <a href="...">Click here</a>
          </div>
          <div className="news-cont-right old-news bb">
            <span className="new-tag">NEW</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Latestnews;
