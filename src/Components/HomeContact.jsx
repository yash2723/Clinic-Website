import React from 'react'

export default function HomeContact() {
    return (
        <div className="section contact">

            <div className="section-title">
                <h2>Contact Us</h2>
                <div className="section-title-underline"></div>
            </div>

            <form action="" data-aos="fade-down">
                
                <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Name" />
                    <label htmlFor="floatingInput">Full Name</label>
                </div>

                <div className="form-floating mb-4">
                    <input type="email" className="form-control" id="floatingPassword" placeholder="name@example.com" />
                    <label htmlFor="floatingPassword">Email Address</label>
                </div>

                <div className="form-floating mb-4">
                    <input type="phone" className="form-control" id="floatingPassword" placeholder="name@example.com" />
                    <label htmlFor="floatingPassword">Phone Number</label>
                </div>

                <div className="form-floating mb-4">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label htmlFor="floatingTextarea2">Comments</label>
                </div>

                <button type="submit" className="btn btn-lg submit-btn mb-4">Submit Message</button>

            </form>

            <div className="container contact-details row row-cols-1 row-cols-md-3 g-4">

                <div className="col" data-aos="fade-up">
                    <a href="https://www.google.com.qa/maps/d/u/0/edit?mid=1szwpTWp-J0H4wnggmXY3cKgnxHj-qxnf&usp=sharing">
                        <div className="card h-100">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="card-body">
                            <h4 className="card-title">Location : </h4>
                            <p className="card-text">Prarthna Homeo Clinic <br/> GF-1 , Anandvan Complex , New IPCL Road , Subhanpura , Vadodara. <br/> <br/> OR <br/> <br/> Tapasvi Homeo Clinic <br/> FF-9 , Shivdhara Complex , Near Astha Hospital , Vasna Road , Vadodara. </p>
                        </div>
                        </div>
                    </a>
                </div>

                <div className="col" data-aos="fade-down">
                    <a href="tel: +91 9424509219">
                        <div className="card h-100">
                        <i className="fas fa-phone-alt"></i>
                        <div className="card-body">
                            <h4 className="card-title">Phone Us 24/7 : </h4>
                            <p className="card-text">+91 9424509219</p>
                        </div>
                        </div>
                    </a>
                </div>

                <div className="col" data-aos="fade-up">
                    <a href="mailto: jwalantprajapati@yahoo.com">
                        <div className="card h-100">
                        <i className="far fa-envelope"></i>
                        <div className="card-body">
                            <h4 className="card-title">Mail Us 24/7 : </h4>
                            <p className="card-text">jwalantprajapati@yahoo.com</p>
                        </div>
                        </div>
                    </a>
                </div>

            </div>

            <div className="google-map">

                <div className="card">

                    <div className="row g-0">

                        <div className="col-md-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.1819103575863!2d73.14990131744383!3d22.308958999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc890c8de8959%3A0xb1c97577b90ae445!2sDr%20Jwalant%20Prajapati!5e0!3m2!1sen!2sin!4v1622652312768!5m2!1sen!2sin" allowfullscreen="" loading="lazy" data-aos="fade-up"></iframe>
                        </div>

                        <div className="col-md-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.7544180447912!2d73.15450541744384!3d22.325125699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8e91d36102b%3A0x4cef94b1a09f8768!2sPrarthana%20Homeo%20Clinic!5e0!3m2!1sen!2sin!4v1622651853273!5m2!1sen!2sin" allowfullscreen="" loading="lazy" data-aos="fade-down"></iframe>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
