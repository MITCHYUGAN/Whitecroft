import logo from "./Images/Whitecroft.svg"
import { BsSendFill } from "react-icons/bs";

const Footer = () => {
    return(
        <section className="footer">
            <div className="footerwrapper">
                <div className="footerheading">
                    <div className="footerheadingtexts">
                        <h3>Sign up for our newsletter</h3>
                        <p>Get the latest updates on Whitecroft and tips on how best to work with us </p>
                    </div>
                    <div className="subscribe">
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                        <BsSendFill className="subscribeicon" />
                    </div>
                </div>
                <div className="footercontents">
                    <div className="footercontentslogotext">
                        <img src={logo} alt="" />
                        <p>Get the latest updates on Whitecroft and tips on how best to work with us</p>
                    </div>
                    <div className="Services">
                        <h3>Services</h3>
                        <ul>
                            <li>UI/UX Design</li>
                            <li>Mobile Development</li>
                            <li>Software Engineering</li>
                            <li>Product/Growth Marketing </li>
                        </ul>
                    </div>
                    <div className="company">
                        <h3>Company</h3>
                        <ul>
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Request for quote</li>
                            <li>Team </li>
                        </ul>
                    </div>
                    <div className="social">
                        <h3>Social</h3>
                        <ul>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                            <li>Dribbble </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer