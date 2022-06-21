import React from 'react'
import about_us_img from '../images/about-us-img.png'

export default function HomeAboutUs() {
    return (
        <div className="section about-us">
            
            <div className="section-title">
                <h2>About Us</h2>
                <div className="section-title-underline"></div>
            </div>

            <div className="container">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-6" data-aos="fade-down">
                            <img src={about_us_img} alt="..." />
                        </div>
                        <div className="col-md-6" data-aos="fade-up">
                            <div className="card-body">
                                <h2 className="card-title">DR. JWALANT PRAJAPATI</h2>
                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta veritatis esse dolore quis illo excepturi libero quo consectetur pariatur labore, itaque error architecto, sint blanditiis sunt, qui hic maiores ex atque voluptas temporibus ea?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt deleniti eos sit, consequatur dolore pariatur nulla sequi eaque alias dignissimos, impedit quibusdam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sequi nobis aperiam tenetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas sit iure, ad esse voluptate numquam in ducimus et.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
