import eventPic from "./GalleryImages/pic1.jpeg";
function Events() {
  return (
    <div className="eventsPage" id="events">
      <div className="about-header flex flex-col justify-start align-center">
        <h1>EVENTS</h1>
        <h3>--What we did?--</h3>
      </div>
      <div className="events-cont">
        <p className="text-justify fs-med opl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          quam laborum amet, unde, maxime ipsa ea sed praesentium placeat alias
          non inventore quaerat? Sit dicta placeat voluptatum commodi obcaecati
          quisquam excepturi corporis deserunt! Repellendus reiciendis magni,
          dolor ad dolore impedit necessitatibus veniam laborum accusamus optio
          quisquam corrupti fugit deleniti aut. Quos molestiae quis incidunt
          veniam et optio culpa tenetur saepe!
        </p>
      </div>
      <div class="eventListPage opl flex flex-col justify-betweenr">
        <div class="eventsListBody flex justify-start align-center">
          <div class="elbc eLBodyLeft">
            <img src={eventPic} alt="eventPic" />
          </div>
          <div class="elbc eLBodyRight">
            <div class="eventsListHead">
              <h2>Tech Firebrand 2022 SUBEX</h2>
            </div>
            <p class="text-justify mt-1 fs-med">
              Tech Firebrand 2022 which was hosted by SUBEX in association with
              MSRIT was a huge success!! The industrial Experts giving out their
              vast knowledge regarding AI/ML, Data science and the necessity of
              women contribution in this very field to a number of audience
              present there was a wonderful experience & exposure.
            </p>
            <p className="text-justify mt-1 fs-med">
              This was the very first event coordinated by ArtiSec RIT Club{" "}
              <br />
              Which is a proud start for our club
            </p>
            <div className="checkSocialsBox mt-1 flex flex-row justify-start align-center">
              <p className="fs-med">Instagram link to the event</p>
              <div className="chksocic flex justify-center align-center">
                <a href="..." target="_blank">
                  <i class="fa-brands fa-instagram fa-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-grid opl">
        <div class="cards bw flex flex-col justify-start align-center">
          <div class="cards-head p-2">
            <i class="mr-0 fa-brands fa-hackerrank fa-2x"></i>
            <h1>Ideathon</h1>
          </div>
          <div class="cards-body">
            <p className="text-justify fs-med p-2 ">An ideathon is an event that brings together people with diverse backgrounds and expertise to brainstorm, develop and pitch innovative ideas to solve a particular problem or address a specific challenge. Participants collaborate in teams to generate and refine ideas, with the ultimate goal of creating a viable solution or prototype.</p>
          </div>
        </div>
        <div class="cards bw flex flex-col justify-start align-center">
          <div class="cards-head p-2">
            <i class="mr-0 fa-solid fa-lightbulb fa-2x"></i>
            <h1>TEDX Talks</h1>
          </div>
          <div class="cards-body">
            <p className="text-justify p-2 fs-med">TEDx talks are locally organized events that bring together speakers from various fields to deliver short, powerful presentations on a wide range of topics. These talks aim to inspire, inform, and spark meaningful conversations around important issues. TEDx events are independently organized.</p>
          </div>
        </div>
        <div class="cards bw flex flex-col justify-start align-center">
          <div class="cards-head p-2">
            <i class="mr-0 fa-solid fa-bowling-ball fa-2x"></i>
            <h1>Fun Activities</h1>
          </div>
          <div class="cards-body">
            <p className="fs-med p-2 text-justify">Fun activities like coding challenges, geo guessing, and other similar games and puzzles are designed to entertain and challenge participants. Coding challenges require participants to write code to solve a particular problem or achieve a specific goal. Geo guessing involves identifying locations based on visual clues or descriptions. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
