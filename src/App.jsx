import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "./pages/Index/Index"
import Login from "./pages/Login/Login"
// import Header from "./components/Header/Header"
import Register from "./pages/Register/Register"
import HLifestyle from "./pages/Healthy-Lifestyle/HLifestyle"
import FormHs from "./pages/Healthy-Statistic/FormHs"
import ResultPage from "./pages/Healthy-Statistic/ResultPage"
// import Shop from "./pages/Shop/Shop"
// import Cart from "./pages/Cart/Cart"
// import Wishlist from "./pages/Wishlist/Wishlist"
// import ProductDetail from "./pages/Shop-Detail/ProductDetail"
// import QuickView from "./pages/QuickView/QuickView"



function App() {

  return (
    <Router>
      {/* <Header/> */}
      <Routes>
        <Route exact path="/" Component={Index} />
        <Route path="/healthylifestyle" Component={HLifestyle} />
        <Route path="/formhs" Component={FormHs}/>
        <Route path="/resultpage" Component={ResultPage}/>
        {/* <Route path="/shop/detail-shop/:productId" Component={ProductDetail} />

        <Route path="/my-cart" Component={Cart} />
        <Route path="/my-wishlist" Component={Wishlist} /> */}
        <Route path="/login" Component={Login} />
        {/* <Route path="/forget-password" Component={ForgetPassword} />
        <Route path="reset-password" Component={ResetPassword} /> */}
        <Route path="/register" Component={Register} />
        {/* <Route path="/quick-view" Component={QuickView} /> */}
      </Routes>
    </Router>
  )
}

export default App
