import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hlstyle from "../../components/Healthy-Lifestyle/Hlstyle";
import Slider from "../../components/Slider/Slider";
import TopSports from "../../components/Top-Sports/TopSports";

export default function Index() {
    return (
        <div>
            <Header/>
            <Slider/>
            <Hlstyle/>
            <TopSports/>
            <Footer />
        </div>
    )
}