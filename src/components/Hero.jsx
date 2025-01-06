import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="row">
                        <div className="col-md-6 content">
                            <div className="title">YOUR FEET DESERVE THE BEST</div>
                            <p>
                                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                            </p>
                            <div className="btn-list">
                                <button>Shop Now</button>
                                <button>Category</button>
                            </div>
                            <div className="shoping">
                                <span>Also Available On</span>
                                <div className="brand-icons">
                                    <img src="public/images/flipkart.png" alt="logo" />
                                    <img src="public/images/amazon.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 hero-image">
                            <img src="public/images/shoes.png" alt="shoes" />
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
