import React from 'react'
import slide_img_1 from "../images/slide-img-1.png";
import slide_img_2 from "../images/slide-img-2.png";
import slide_img_3 from "../images/slide-img-3.png";
import slide_img_4 from "../images/slide-img-4.png";
import slide_img_5 from "../images/slide-img-5.png";

export default function HomeSlider() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active">

                        <div className="container">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-6" data-aos="fade-left">
                                        <img src={slide_img_5} alt="..." />
                                    </div>
                                    <div className="col-md-6" data-aos="fade-right">
                                        <div className="card-body">

                                            <h5 className="card-title">Welcome to</h5>

                                            <h2 className="card-text">DR. Jwalant Homeo Clinic</h2>

                                            <button type="button" className="slider-read-more-btn btn btn-light btn-lg">Read More</button>

                                            <button type="button" className="slider-contact-btn btn btn-outline-light btn-lg">Contact Us</button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="carousel-item">

                        <div className="container">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-6" data-aos="fade-left">
                                        <img src={slide_img_2} alt="..." />
                                    </div>
                                    <div className="col-md-6" data-aos="fade-right">
                                        <div className="card-body">

                                            <h5 className="card-title">Hello ,</h5>

                                            <h2 className="card-text">We do our best for you and your health</h2>

                                            <button type="button" className="slider-read-more-btn btn btn-light btn-lg">Read More</button>
                                            
                                            <button type="button" className="slider-contact-btn btn btn-outline-light btn-lg">Contact Us</button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="carousel-item">

                        <div className="container">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-6" data-aos="fade-left">
                                        <img src={slide_img_3} alt="..." />
                                    </div>
                                    <div className="col-md-6" data-aos="fade-right">
                                        <div className="card-body">

                                        <h5 className="card-title">Hello ,</h5>

                                        <h2 className="card-text">We care and protect your health</h2>

                                        <button type="button" className="slider-read-more-btn btn btn-light btn-lg">Read More</button>

                                        <button type="button" className="slider-contact-btn btn btn-outline-light btn-lg">Contact Us</button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="carousel-item">

                        <div className="container">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-6" data-aos="fade-left">
                                        <img src={slide_img_4} alt="..." />
                                    </div>
                                    <div className="col-md-6" data-aos="fade-right">
                                        <div className="card-body">

                                        <h5 className="card-title">Hello ,</h5>

                                        <h2 className="card-text">Correct diagnosis is half the success</h2>

                                        <button type="button" className="slider-read-more-btn btn btn-light btn-lg">Read More</button>

                                        <button type="button" className="slider-contact-btn btn btn-outline-light btn-lg">Contact Us</button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        </>
    )
}
