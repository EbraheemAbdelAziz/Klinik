import { Link } from "react-router-dom";
import logo from "../../../img/logo/logo.png"
const NavBar = () => {
  return (
    <>
    <header>
        <div class="header-area">
            <div class="main-header header-sticky">
                <div class="container-fluid">
                    <div class="row align-items-center">
                          {/* <!-- Logo --> */}
                        <div class="col-xl-2 col-lg-2 col-md-1">
                            <div class="logo">
                                <a href="index.html"><img src={logo} alt="logo" /></a>
                            </div>
                        </div>
                        <div class="col-xl-10 col-lg-10 col-md-10">
                            <div class="menu-main d-flex align-items-center justify-content-end">
                                  {/* <!-- Main-menu --> */}
                                <div class="main-menu f-right d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="doctor.html">Doctors</a></li>
                                            <li><a href="department.html">Department</a>
                                            <ul class="submenu">
                                                    <li><a href="blog.html">Dentistry</a></li>
                                                    <li><a href="blog_details.html">Cardiology</a></li>
                                                    <li><a href="elements.html">ENT Spitialists</a></li>
                                                    <li><a href="elements.html">Astrology</a></li>
                                                    <li><a href="elements.html">Neuroanatomy</a></li>
                                                    <li><a href="elements.html">Blood Screening</a></li>
                                                </ul></li>
                                            <li><a href="blog.html">Testimonials</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div class="header-right-btn f-right d-none d-lg-block ml-30">
                                    <Link to="/login" class="btn header-btn">Sign In</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  );
};
export default NavBar;
