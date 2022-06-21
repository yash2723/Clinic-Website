import React from 'react'
import about_img from "../images/about-img.png";
import HomeAboutUs from './HomeAboutUs'

export default function About() {
    return (
        <>
            <div className="about">
                <div className="card bg-dark text-white">
                    <img src={about_img} className="card-img" alt="..." />
                    <div className="card-img-overlay" data-aos="fade-left">
                        <h1 className="card-title">We Restore Your Health Naturally!</h1>
                    </div>
                </div>

                <HomeAboutUs />

                <div className="container section">
                    <div className="card mb-3 details-skills">
                        <div className="row g-0">

                            <div className="col-md-6" data-aos="fade-up">
                            <div className="section-title">
                                <h2>More Details</h2>
                                <div className="section-title-underline"></div>
                            </div>
                                <div className="card-body">
                                    <table class="table">
                                        <tbody>

                                            <tr>
                                                <th scope="row">Speciality : </th>
                                                <td>Lorem ipsum dolor sit.</td>
                                            </tr>

                                            <tr>
                                                <th scope="row">Degree : </th>
                                                <td>Lorem.</td>
                                            </tr>

                                            <tr>
                                                <th scope="row">Age : </th>
                                                <td>40</td>
                                            </tr>

                                            <tr>
                                                <th scope="row">Experience : </th>
                                                <td>10 Years</td>
                                            </tr>

                                            <tr>
                                                <th scope="row">Work Days : </th>
                                                <td>Mon - Sat , 5pm - 7pm</td>
                                            </tr>

                                            <tr>
                                                <th scope="row">Email : </th>
                                                <td> <a href="mailto: jwalantprajapati@yahoo.com"> jwalantprajapati@yahoo.com </a> </td>
                                            </tr>

                                            <tr>
                                                <th scope="row">Phone Number : </th>
                                                <td> <a href="tel: +91 9424509219"> +91 9424509219 </a> </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    <button type="button" className="slider-contact-btn btn btn-outline-light btn-lg">Contact Us</button>
                                </div>
                            </div>

                            <div className="col-md-6" data-aos="fade-down">
                                <div className="section-title">
                                    <h2>My Skills</h2>
                                    <div className="section-title-underline"></div>
                                </div>
                                <div className="card-body">

                                    Joint Diseases
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped joint" role="progressbar"  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                    Skin Diseases
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped bg-success skin" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                    Children Diseases
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped bg-info children" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                    Digestive Diseases
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped bg-warning digestive" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                    Kidney Diseases 
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped bg-danger kidney" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                    Respiratory Diseases
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped bg-info respiratory" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                    Mental Diseases 
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped mental" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="section">

                </div>

            </div>
        </>
    )
}
