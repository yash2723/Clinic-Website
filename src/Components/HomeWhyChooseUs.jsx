import React from 'react'

export default function HomeWhyChooseUs() {
    return (
        <div className="section why-choose-us">

            <div className="section-title">
                <h2>Why Choose Us</h2>
                <div className="section-title-underline"></div>
            </div>

            <div className="container">

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col" data-aos="fade-up">
                        <div className="card h-100">
                        <i className="far fa-calendar-alt"></i>
                        <div className="card-body">
                            <h4 className="card-title">Work on Schedule</h4>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col" data-aos="fade-up">
                        <div className="card h-100">
                        <i className="fas fa-user-md"></i>
                        <div className="card-body">
                            <h4 className="card-title">Modern Treatment Protocols</h4>
                            <p className="card-text">This is a short card.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col" data-aos="fade-up">
                        <div className="card h-100">
                        <i className="fas fa-stethoscope"></i>
                        <div className="card-body">
                            <h4 className="card-title">New Approaches</h4>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col" data-aos="fade-down">
                        <div className="card h-100">
                        <i className="fas fa-tools"></i>
                        <div className="card-body">
                            <h4 className="card-title">Modern Equipment</h4>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col" data-aos="fade-down">
                        <div className="card h-100">
                        <i className="far fa-clock"></i>
                        <div className="card-body">
                            <h4 className="card-title">24/7 Available</h4>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col" data-aos="fade-down">
                        <div className="card h-100">
                        <i className="fas fa-rupee-sign"></i>
                        <div className="card-body">
                            <h4 className="card-title">Low Cost</h4>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
