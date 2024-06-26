import Header from "../Header/Header";
import "./HlstyleComponent.css";
import Footer from "../Footer/Footer";

export default function HlstyleComponent() {
  return (
    <>
      <Header />
      <div className="healthy-lifestyle-component">
        <div className="container-judulhl">
          <h3> ` Healthy Lifestyle</h3>
        </div>
        <div className="saran1">
          <div className="image-saran1">
            <img src="public/img-product/gendut.png" alt="" />
          </div>
          <div className="text-saran1">
            <h3>Kelebihan Berat Badan</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              voluptatum exercitationem. Molestiae facilis, fugiat architecto
              sit nihil in, veniam adipisci dicta vitae optio omnis eum commodi
              quia quasi provident labore.
            </p>
          </div>
        </div>
        <div className="saran2">
          <div className="text-saran2">
            <h3>Permasalahan Tinggi Badan</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              voluptatum exercitationem. Molestiae facilis, fugiat architecto
              sit nihil in, veniam adipisci dicta vitae optio omnis eum commodi
              quia quasi provident labore.
            </p>
          </div>
          <div className="image-saran2">
            <img src="public/img-product/tinggi-badan.png" alt="" />
          </div>
        </div>
        <div className="saran3">
          <div className="image-saran3">
            <img src="public/img-product/kurus.jpg" alt="" />
          </div>
          <div className="text-saran3">
            <h3>Kekurangan Berat Badan</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              voluptatum exercitationem. Molestiae facilis, fugiat architecto
              sit nihil in, veniam adipisci dicta vitae optio omnis eum commodi
              quia quasi provident labore.
            </p>
          </div>
        </div>
        {/* <div className="saran4">
        <div className="text-saran4">
            <h3>Berat Badan Linda</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, voluptatum exercitationem. Molestiae facilis, fugiat architecto sit nihil in, veniam adipisci dicta vitae optio omnis eum commodi quia quasi provident labore.</p>
        </div>
        <div className="image-saran4">
            <img src="public/img-product/gendut.png" alt="" />
        </div>
    </div> */}
      </div>
      <Footer /> 
    </>
  );
}
