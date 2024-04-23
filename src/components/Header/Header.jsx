import { Link } from "react-router-dom";
import "./Header.css";

const handleLogout = () => {
  localStorage.removeItem("token");
  console.log("Successfully logged out, Take care and come back soon!");
};

export default function Header() {
  const token = localStorage.getItem("token");

  return (
    <div className="navigation-bar">
      <div className="left-side">
        <div className="logo-nav">
          <img src="public/img-product/maskgroup.png" alt="" srcSet="" />
          <div class="nav-judul">
            {/* <h2>Vision</h2> */}
            <h3>Healthlog</h3>
          </div>
        </div>
        <div className="all-categories">
          <Link to="/"><h5 className="home"> Home  </h5></Link>
        </div>
        <div className="nav-hs">
          <Link to="/formhs"><h5 className="title-hs">BMI</h5></Link> 
        </div>
        <div className="nav-hl">
          <Link to="/healthylifestyle"><h5 className="title-hl">Health Lyfestyle</h5></Link>
        </div>
        <div className="nav-remind">
          <h5 className="title-remind">Reminders</h5>
        </div>
      </div>

      <div className="user-auth">
        {token ? (
          // Jika token tersedia (pengguna sudah login), tampilkan button logout
          <button className="btn-auth-logout" onClick={handleLogout}>
            <h5 className="auth-logout-title">Logout</h5>
          </button>
        ) : (
          // Jika token tidak tersedia (pengguna belum login), tampilkan button login
          <button className="btn-user-login">
            <Link to="/login" className="auth-login-title">
              Login
            </Link>
          </button>
        )}
      </div>
    </div>
  );
}
