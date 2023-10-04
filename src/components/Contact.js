function Contact() {
  const emailSent = () => {
    alert("Message sent successfully!!");
    let contactForm = document.getElementById("contactForm");
    contactForm.reset();
  }
  return (
    <>
      <div className="contactPage flex flex-col justify-start align-center">
        <div className="con-header flex flex-col justify-start align-center">
          <h1>CONTACT</h1>
          <h3>--Get in touch--</h3>
        </div>
        <div className="contp flex justify-between align-start" id="contact">
          <div className="ccont cleft flex flex-col justify-start align-center">
            <div className="clh text-center opl jct">
              <h2>Join Our Club</h2>
            </div>
            <div className="clb mtb-2">
              <p className="text-justify fs-med opl clbcont">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
                consectetur veritatis quas qui corporis excepturi nulla est
                temporibus optio repellendus magnam omnis mollitia reprehenderit
                fugit, dicta, fugiat veniam assumenda! Voluptate blanditiis
                temporibus sit, explicabo tempora et deleniti! Tempora voluptas
                maiores similique nobis! Debitis, pariatur modi impedit
                consectetur fuga expedita aperiam.
              </p>
            </div>
            <div className="socialBox flex justify-between align-center">
              <div className="clf">
                <a href="..." className="BtnN flex justify-center align-center">
                  Join Club
                </a>
              </div>
              <div className="flex flex-row justify-start align-center hgfv">
                <p className="fs-med follus">Follow us</p>
                <div className="smicons ml-1 flex flex-row justify-around align-center">
                  <div className="sic-1 flex justify-center align-center">
                    <a href="...">
                      <i class="fa-brands fa-square-instagram fa-xl"></i>
                    </a>
                  </div>
                  <div className="sic-1 ml-0 flex justify-center align-center">
                    <a href="...">
                      <i class="fa-brands fa-linkedin fa-xl"></i>
                    </a>
                  </div>
                  <div className="sic-1 ml-0 flex justify-center align-center">
                    <a href="...">
                      <i class="fa-brands fa-telegram fa-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ccont cright">
            <div className="clh text-center opl">
              <h2>Mail Us</h2>
            </div>
            <div className="crb">
              <form
                id="contactForm"
                action="https://formspree.io/f/xbjewnnr"
                onSubmit={ emailSent }
                method="POST"
                className="flex flex-col justify-between align-center"
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="NAME"
                  required
                  autoComplete="off"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="EMAIlL"
                  required
                  autoComplete="off"
                />
                <textarea
                  name="message"
                  id="message"
                  cols={20}
                  rows={8}
                  placeholder="MESSAGE..."
                  required
                  defaultValue={""}
                />
                <span>
                  <input type="submit" value="SEND" className="sendBtn" />
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
