import { ClientsFeed } from "../Data/ClientsFeed"

const ClientsFeeds = () => {
    return(
        <section className="clientsfeeds">
            <h1 className="clientsfeedsheadingtext">What our Clients say</h1>
            <div className="feeds">
                {
                    ClientsFeed.map(({id, img, name, position, text}) => {
                        return(
                            <div className="feed">
                                <img src={img} alt="" />
                                <div className="feedcontents">
                                    <h2>{name}</h2>
                                    <h5>{position}</h5>
                                    <p>{text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ClientsFeeds