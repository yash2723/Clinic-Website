import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    <div className="col">

                        <div className="card h-100">
                        
                            <div className="card-body">
                                <div className="card-title">
                                    <a href="" className="navbar-brand">
                                        <i className="fas fa-heartbeat"></i>
                                        Homeopathy Clinic
                                    </a>
                                </div>
                                <div className="card-text">
                                    <p><a href="#"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia assumenda voluptatibus, perferendis quasi deleniti voluptates expedita hic modi ut, ea quo delectus doloribus nemo. Sapiente, maiores modi. Ea, minima aliquid.132 </a></p>
                                </div>
                                <div className="social-icon">
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-whatsapp"></i></a>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="col">

                        <div className="card h-100">
                        
                            <div className="card-body">
                                
                                <div className="card-title">
                                    <p className="navbar-brand">
                                        Useful Links
                                    </p>
                                </div>
                                <div className="card-text">
                                    <p><a href="" className="mb-3">About Us</a></p>
                                    <p><a href="" className="mb-3">Treatments</a></p>
                                    <p><a href="" className="mb-3">Timetable</a></p>
                                    <p><a href="" className="mb-3">Contact Us</a></p>
                                </div>
                            
                            </div>

                        </div>

                    </div>

                    <div className="col">

                        <div className="card h-100">
                        
                            <div className="card-body">
                                
                                <div className="card-title">
                                    <p className="navbar-brand">
                                        Get in Touch
                                    </p>
                                </div>
                                
                                <div className="table-responsive-lg">
                                    <table className="table">
                                        <tbody>

                                            <tr>
                                                <a href="https://www.google.com.qa/maps/d/u/0/edit?mid=1szwpTWp-J0H4wnggmXY3cKgnxHj-qxnf&usp=sharing" className="contact-info">
                                                    <th scope="row"><i className="fas fa-map-marker-alt"></i></th>
                                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius id maxime omnis unde architecto po</td>
                                                </a>
                                            </tr>

                                            <tr>
                                                <a href="mailto: jwalantprajapati@yahoo.com" className="contact-info">
                                                    <th scope="row"><i className="fas fa-envelope"></i></th>
                                                    <td>jwalantprajapati@yahoo.com</td>
                                                </a>
                                            </tr>

                                            <tr>
                                                <a href="tel: +91 9424509219" className="contact-info">
                                                    <th scope="row"><i className="fas fa-phone-alt"></i></th>
                                                    <td>+91 9424509219</td>
                                                </a>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                    </div>
                    
                </div>

            </div>

            <div className="copyright-text">
                <p>Copyright ©2022 All rights reserved | This template is made with ❤ by <span className="highlight-text"> Yash Upadhyay </span> </p>
            </div>

        </div>
    )
}
