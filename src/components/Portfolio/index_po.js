import './index_po.scss'
import React from 'react';
import portfolioData from '../../data/portfolio.json';
/* import CardPortfolio from '../Card/index_card'; */

const Portfolio = () => {
    console.log(portfolioData);

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio" />
                                
                                <img className='port-img' 
                                    src={port.image}
                                    alt="port_image">
                                </img>

                                <div className='content'>
                                    <p className='title'>{port.title}</p>
                                    <h4 className='description'>{port.description}</h4>
                                    <buttom
                                        className='btn'
                                        onClick={() => window.open(port.url)}
                                    >View Code</buttom>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return(
        <>
        <div className='container portfolio-page'>
            <h1 className='page-title'>Portfolio</h1>
            <div>
                <h2> Now I show you my projects </h2>
            </div>

            <div>{renderPortfolio(portfolioData.portfolio)}</div>
            {/* <div className='cards'></div> */}
        </div> 
        </>
    )
}

export default Portfolio;