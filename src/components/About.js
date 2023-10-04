import Carousel from "./Carousel";
function About() {
  return (
    <div className="aboutPage mtb-2" id="about">
      <div className="about-header flex flex-col justify-start align-center">
        <h1>ABOUT US</h1>
        <h3>--What are we?--</h3>
      </div>
      <Carousel />
      <div className="about-cont">
        <p className="text-justify fs-big">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          nemo eius possimus dicta sed, dolorum, non quidem dignissimos aperiam
          eligendi fugit veritatis sapiente dolore vero aliquid dolor aspernatur
          perspiciatis. Tempore debitis, inventore dolor laudantium voluptatem
          esse, odit, necessitatibus minus assumenda totam earum dolorum magni
          ab alias accusantium sapiente laborum deserunt et quidem explicabo
          rerum a beatae nihil! Quasi minima quia minus magnam, accusamus
          obcaecati unde perferendis omnis eius nisi adipisci deserunt incidunt,
          repudiandae tempora, voluptates sed soluta aperiam veritatis! Est
          fugit animi iusto quaerat, expedita deleniti aliquid quisquam alias?
          Atque excepturi dicta odit cumque maiores qui non voluptas numquam
          beatae?
        </p>
        <div class="secondary-btn flex justify-center align-center">
          <a href="#events" class="secBtn flex justify-center align-center">
            Checkout our Events
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
