import Footer from "./footer"
import "../CSS/career.css"
import e from "../assets/e.png"
import s from "../assets/s.pdf"
const Career = () => {
  return (
    <div className="career=main">
      <div className="tc">
        <h1>COUNSELLOR</h1>
      </div>
      <div className="c-m">
        <div className="counsellor-ai-main">
       
        </div>
      </div>
      <div className="c-features-main">
        <div className="feature-head">
          <h1>FEATURES</h1>
        </div>
        <div className="feature-left">
          <div className="img-left">
            <img className="image" src={e} alt="" />
          </div>
          <div className="img-text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, architecto. Debitis tempore inventore omnis iste quasi sunt recusandae modi corporis adipisci ratione consequuntur nemo reprehenderit eius dicta, nobis illum architecto?</div>
        </div>
        <div className="feature-right">
          <div className="img-text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore praesentium, et corrupti dolorum quibusdam corporis voluptas quis repellendus neque fuga.</div>
          <div className="img-right">
            <img className="image" src={e} alt="" />
          </div>
        </div>
        <div className="feature-left">
          <div className="img-left">
            <img className="image" src={e} alt="" />
          </div>
          <div className="img-text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae molestias possimus placeat neque consequatur velit vel qui dignissimos ipsum adipisci.</div>
        </div>
        <div className="feature-right">
          <div className="img-text-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, id. Ea eum quos sed assumenda facilis voluptas totam dolorum nisi?</div>
          <div className="img-right">
            <img className="image" src={e} alt="" />
          </div>
        </div>
      </div>
      <div className="h-i-w-main">
        <div className="h-i-w-text">
          <h1>HOW IT WORKS ?</h1>
        </div>
        <div className="t-b">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="h-i-w-text-main">
          <div className="hiwt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quae quas esse accusantium pariatur totam nesciunt recusandae vel, maxime facere.
          </div>
        </div>
      </div>
      <div className="citation-main">
        <div className="citation-main-heading">
          <h1>CITATION</h1>
        </div>
        <div className="citation-iframe-main">
          <div className="citation-outer">
            {/* <iframe className="citation-iframe" src={s}></iframe> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Career