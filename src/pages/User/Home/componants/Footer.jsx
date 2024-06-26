import { Link, useLocation } from "react-router-dom"
import Logo from "../../../../img/logo/logo2_footer.png"
export const Footer = ()=>{
    const location = useLocation()
  const {pathname} = location;
    return(
        <>
        {
            pathname === "/login" || pathname === "/register" || pathname === "/" ? ("") :
            <footer>
        {/* <!--? Footer Start--> */}
        <div class="footer-area section-bg" data-background="assets/img/gallery/footer_bg.jpg">
            <div class="container">
                <div class="footer-top footer-padding">
                    <div class="row d-flex justify-content-between">
                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-8">
                            <div class="single-footer-caption mb-50">
                                {/* <!-- logo --> */}
                                <div class="footer-logo">
                                    <Link to={"/home"}><img src={Logo} alt=""/></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-5">
                            <div class="single-footer-caption mb-50">
                                <div class="footer-tittle">
                                    <h4>About Us</h4>
                                    <div class="footer-pera">
                                        <p class="info1">Lorem igpsum doldfor sit amet, adipiscing elit, sed do eiusmod tempor cergelit rgh. </p>
                                        <p class="info1">Lorem ipsum dolor sit amet, adipiscing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                            <div class="single-footer-caption mb-50">
                                {/* <!-- Form --> */}
                                <div class="footer-form">
                                    <div id="mc_embed_signup">
                                        <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" class="subscribe_form relative mail_part" novalidate="true">
                                            <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " class="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'"/>
                                            <div class="form-icon">
                                                <button type="submit" name="submit" id="newsletter-submit" class="email_icon newsletter-submit button-contactForm">
                                                    Send
                                                </button>
                                            </div>
                                            <div class="mt-10 info"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-xl-9 col-lg-8">
                            <div class="footer-copy-right">
                                <p>Copyright &copy; Team Gamed</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4">
                            {/* <!-- Footer Social --> */}
                            <div class="footer-social f-right">
                                <Link><i class="fab fa-twitter"></i></Link>
                                <Link><i class="fab fa-facebook-f"></i></Link>
                                <Link><i class="fas fa-globe"></i></Link>
                                <Link><i class="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End--> */}
    </footer>
        }
        </>
    )
}