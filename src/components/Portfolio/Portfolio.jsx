import { PorfolioData } from "../Data/PortfolioData"
import arrowfront from "./Images/arrowfront.png"

const Portfolio = () =>{
    return(
        <section className="portfolio" id="portfolio">
            <h1 className="portfolioheadingtext">Portfolio</h1>
            <div className="portfoliosection">
            {
                PorfolioData.map(({id, img, title, description, liveLink}) => {
                    return(
                        <div className="portfoliocontent" key={id}>
                            <div className="portfoliocontenttexts">
                                <h1>{title}</h1>
                                <p>{description}</p>
                                <a href={liveLink} target="_blank">See live project</a>
                            </div>
                            <img src={img} alt="" />
                        </div>
                    )
                })
            }
            </div>
            <div className="controllers">
                <button>
                    <img src={arrowfront} alt="" />
                </button>
                <button>
                    <img src={arrowfront} alt="" />
                </button>
            </div>
        </section>
    )
}

export default Portfolio