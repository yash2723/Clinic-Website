import React from 'react'

export default function HomeAboutRecords() {
    return (
        <div className="section about-records">
            
            <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-2 g-lg-3">

                    <div className="col" data-aos="fade-up">
                        <div className="card">
                            <i className="fas fa-users"></i>
                            <div className="card-body">
                                <h2 className="card-title">100 +</h2>
                                <p className="card-text">Healthy and Happy Clients</p>
                            </div>
                        </div>
                    </div>

                    <div className="col" data-aos="fade-up">
                        <div className="card">
                            <i className="fas fa-user-clock"></i>
                            <div className="card-body">
                                <h2 className="card-title">20 +</h2>
                                <p className="card-text">Years of Successful Work</p>
                            </div>
                        </div>
                    </div>

                    <div className="col" data-aos="fade-up">
                        <div className="card">
                            <i className="fas fa-award"></i>
                            <div className="card-body">
                                <h2 className="card-title">10 +</h2>
                                <p className="card-text">Awards of our Clinic</p>
                            </div>
                        </div>
                    </div>

                    <div className="col" data-aos="fade-up">
                        <div className="card">
                            <i className="fas fa-briefcase-medical"></i>
                            <div className="card-body">
                                <h2 className="card-title">50 +</h2>
                                <p className="card-text">Medical Cases Solved</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
