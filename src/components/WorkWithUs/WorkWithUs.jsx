import img from "./Images/img.png"
import vector from "./Images/vector.png"

const WorkWithUs = () => {
    return(
        <section className="workwithus">
            <img src={vector} className="vector" alt="" />
            <div className="workwithuswrapper">
                <img src={img} alt="" />
                <div className="workwithustexts">
                    <h1>Work with us</h1>
                    <p>
                        We are just an enquiry away from meeting your product development and design needs.  We are just an enquiry away from meeting your product development and design needs. We are just an enquiry away from meeting your product development and design needs. We are just an enquiry away from meeting your product development.
                    </p>
                    <button>Send a message</button>
                </div>
            </div>
            <div className="workwithuscirclegradient"></div>
        </section>
    )
}

export default WorkWithUs