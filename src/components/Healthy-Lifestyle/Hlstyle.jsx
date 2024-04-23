import "./Hlstyle.css";

export default function Hlstyle() {
  return (
    <div className="container-healthy-lstyle">
      <div className="healthy-lstyle">
        <div className="product-left">
          <div className="title-bs">
            <h1>Healthy Lifestyle</h1>
          </div>
          <div className="foto-left">
            <img src="public/img-product/hfood.jpg" alt="" />
          </div>
        </div>
        <div className="product-right">
          <div className="foto-right">
            <img
              className="img-ourproduct"
              src="public/img-product/sporty2.jpg"
              alt=""
            />
          </div>
          <div className="sub-title">
            <h3>Our Recommendation</h3>
            <h6>
              Discover our most purchased products of the day, deals and healthy
              products
            </h6>
          </div>
          <button onClick={() => { window.location.href = '/healthylifestyle' }}>
            <img
              className="button-img-hlstyle"
              src="/public/img-product/arrow-bs.png"
              alt=""
            />
            EXPLORE NOW
          </button>
        </div>
      </div>
    </div>
  );
}
