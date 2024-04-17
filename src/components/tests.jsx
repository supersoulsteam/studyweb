import Footer from "./footer"
import '../CSS/tests.css'
import e from "../assets/e.png"
import s from "../assets/s.pdf"
const Tests = () => {
  return (
    <div className="tests-main">
      <div className="tg">
        <h1>Test Generation</h1>
      </div>
      <div className="test-main">
        <div className="test-ai-main">
          <iframe className="test-ai" src="https://supersouls2-spacesss.hf.space"></iframe>
        </div>
      </div>
      <div className="test-features-main">
        <div className="feature-head">
          <h1>FEATURES</h1>
        </div>
        <div className="feature-left">
          <div className="img-left">
            <img className="image" src={e} alt="" />
          </div>
          <div className="img-text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi doloribus repudiandae illum velit libero consequatur minus, dicta et quo hic impedit ratione corrupti error iusto maxime tempora quia rem! Repellendus, repudiandae ad fuga quam, aut voluptatibus sequi voluptatem quae velit voluptate aperiam assumenda, ab alias. Velit quasi autem distinctio explicabo?.</div>
        </div>
        <div className="feature-right">
          <div className="img-text-right">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam odit consequatur voluptatibus cumque voluptas ea deleniti possimus eveniet obcaecati qui nemo maiores temporibus, eligendi saepe molestiae id accusamus delectus? Iusto, cum amet? Labore ducimus ratione tempora quibusdam dolore maxime nisi porro, placeat fugit. Maiores facilis voluptas obcaecati fuga reprehenderit repellat!</div>
          <div className="img-right">
            <img className="image" src={e} alt="" />
          </div>
        </div>
        <div className="feature-left">
          <div className="img-left">
            <img className="image" src={e} alt="" />
          </div>
          <div className="img-text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores rem facilis eveniet voluptatum eum maxime deserunt architecto accusantium ut vitae nostrum, labore excepturi! Nisi architecto rerum tenetur non illum, fugiat voluptatibus ab sunt officia sapiente aperiam. Debitis, laborum voluptates provident eos dolorem, minima neque incidunt, corporis culpa unde consequatur!.</div>
        </div>
        <div className="feature-right">
          <div className="img-text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem nostrum facere vitae a cum recusandae architecto id beatae. Reprehenderit, modi! Libero itaque magnam rem repudiandae, fugiat alias facere est eos doloribus laborum accusamus atque corporis voluptatum esse eius! Blanditiis incidunt ad ut animi dolorum nihil sint laborum repellendus voluptates.</div>
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
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum eos iusto sint vitae eaque temporibus ea nemo veniam illum? Quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis excepturi perspiciatis harum molestiae nemo. Accusamus itaque adipisci veniam consectetur obcaecati quisquam fugiat sequi possimus odio ad, qui quis dolores aperiam.
          </div>
        </div>
      </div>
      <div className="citation-main">
        <div className="citation-main-heading">
          <h1>ADVANTAGES</h1>
        </div>
        <div className="citation-iframe-main">
          <div className="citation-outer">
            <iframe className="citation-iframe" src={s}></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Tests