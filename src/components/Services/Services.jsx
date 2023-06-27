import { AllServices } from "../Data/ServicesData"

const Services = () => {
    return(
        <section className="services">
            <div>
                <h1>Services</h1>
                <p>
                    Whitecroft is a  premier luxury software design and development agency specializing in crafting minimalistic, elegant, and user-centric designs that reflect the true value of your brand. Our team of experts is dedicated to delivering digital experiences that are tailored to your specific needs, giving you an edge over your competitors.
                </p>
            </div>
            <div>
                {
                   AllServices.map(({title, description, img, id}) => {
                      return(
                        <div key={id}>
                            <img src={img} />
                            <div>
                                <h1>{title}</h1>
                                <p>{description}</p>
                                
                            </div>
                        </div>
                      )
                   }) 
                }
            </div>
        </section>
    )
}

export default Services