import logo from "./Images/Whitecroft.svg"

const Footer = () => {
    return(
        <section className="footer">
            <div className="footerwrapper">
                <div className="footerheading">
                    <div className="footerheadingtexts">
                        <h3>Sign up for our newsletter</h3>
                        <p>Get the latest updates on Whitecroft and tips on how best to work with us Get the latest updates on Whitecroft and tips on how best to work with us</p>
                    </div>
                    <div>
                        <input type="email" placeholder="Enter youe email" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="footercontents">
                    <div>
                        <img src={logo} alt="" />
                        <p>Get the latest updates on Whitecroft and tips on how best to work with us</p>
                    </div>
                    <div className="Services">
                        <ul>
                            <li>UI/UX Design</li>
                            <li>Mobile Development</li>
                            <li>Software Engineering</li>
                            <li>Product/Growth Marketing </li>
                        </ul>
                    </div>
                    <div className="company">
                        <ul>
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Request for quote</li>
                            <li>Team </li>
                        </ul>
                    </div>
                    <div className="social">
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