function Carousel() {
  return (
    <>
      <section className="carousel">
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" defaultChecked />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <main id="carousel">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </main>
      </section>
    </>
  );
}

export default Carousel;
