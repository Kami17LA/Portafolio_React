import './index_card.scss'

export const CardPortfolio = (props) => {
  
    return (
        <>
            <div className="card-container">
                <div className="img-zone">
                    <h2>{props.name}</h2>
                    <img className="card-item" 
                        src={props.image} 
                        alt="cover_image"
                    />
                    <h2 className='description-zone'>{props.text}</h2>
                </div>
                <div className="button-zone">
                    <button className="button-view" onClick={props.linked}>View Code</button>
                </div>
            </div>
        </>
    )
}

export default CardPortfolio;