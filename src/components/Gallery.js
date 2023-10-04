import pic1 from "./GalleryImages/pic1.jpeg";
import pic2 from "./GalleryImages/pic2.jpeg";
import pic3 from "./GalleryImages/pic3.jpeg";
import pic4 from "./GalleryImages/pic4.jpeg";
import pic5 from "./GalleryImages/pic5.jpeg";
import pic6 from "./GalleryImages/pic6.jpeg";
import pic7 from "./GalleryImages/pic7.jpeg";
import pic8 from "./GalleryImages/pic8.jpeg";
import pic9 from "./GalleryImages/pic9.jpeg";
import pic10 from "./GalleryImages/pic10.jpeg";
import pic11 from "./GalleryImages/pic11.jpeg";
import pic12 from "./GalleryImages/pic12.jpeg";

function Gallery() {
  return (
    <div className="galleryPage" id="gallery">
      <div className="about-header flex flex-col justify-start align-center">
        <h1>GALLERY</h1>
        <h3>--What we did?--</h3>
      </div>
      <div class="grid-container">
        <div class="gitem-1 flex align-center justify-center">
          <img src={pic1} alt="pic1" />
        </div>
        <div class="gitem-1 flex align-center justify-center">
          <img src={pic2} alt="pic2" />
        </div>
        <div class="gitem-1 flex align-center justify-center">
          <img src={pic3} alt="pic3" />
        </div>
        <div class="gitem-1 flex align-center justify-center">
          <img src={pic4} alt="pic4" />
        </div>
        <div class="gitem-1 flex align-center justify-center">
          <img src={pic12} alt="pic12" />
        </div>
        <div class="gitem-1 flex align-center justify-center">
          <img src={pic6} alt="pic6" />
        </div>
        <div class="gitem-1 flex align-center justify-center">
          <img src={pic7} alt="pic7" />
        </div>
        <div class="gitem-1 flex align-center justify-center">
          <img src={pic8} alt="pic8" />
        </div>
        <div class="gitem-1 flex align-center justify-center">
          <img src={pic9} alt="pic9" />
        </div>
        <div class="gitem-1 flex align-center justify-center">
          <img src={pic10} alt="pic10" />
        </div>
        <div class="gitem-1 flex align-center justify-center">
          <img src={pic11} alt="pic11" />
        </div>
        <div class="gitem-1 flex align-center justify-center">
          <img src={pic5} alt="pic5" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
