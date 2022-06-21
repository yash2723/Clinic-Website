import React from 'react'
import children_diseases_img from '../images/children-diseases-img.jpg' 
import kidney_diseases_img from '../images/kidney-diseases-img.jpg' 
import respiratory_diseases_img from '../images/respiratory-diseases-img.jpg' 
import endocrine_diseases_img from '../images/endocrine-diseases-img.jpg' 
import female_diseases_img from '../images/female-diseases-img.jpg' 
import male_diseases_img from '../images/male-diseases-img.webp' 
import neurological_diseases_img from '../images/neurological-diseases-img.jpg' 

export default function Treatments() {
    return (
        <div className="section treatments">

            <div className="container">

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                        <img src="https://5.imimg.com/data5/NA/BH/GJ/GLADMIN-14718781/4-250x250.jpg" className="disease-img card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Joint Disease</h3>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src="https://www.news-medical.net/image.axd?picture=2020%2F3%2Fshutterstock_580580401.jpg" className="disease-img card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Skin Disease</h3>
                            <p className="card-text">This is a short card.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src={children_diseases_img} className="disease-img card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Children Disease</h3>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src="https://www.healtheuropa.eu/wp-content/uploads/2019/05/Tharakorn-696x392.jpg" className="disease-img card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Digestive Disease</h3>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src={kidney_diseases_img} className="disease-img card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Kidney Disease</h3>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src={respiratory_diseases_img} className="disease-img card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Respiratory Disease</h3>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src={endocrine_diseases_img} className="disease-img card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Endocrine Disease</h3>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src="https://uncexss.files.wordpress.com/2014/09/mental_health_cover_1.jpg" className="disease-img card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Mental Disease</h3>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src={female_diseases_img} className="disease-img card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Female Disease</h3>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src={male_diseases_img} className="disease-img card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Male Disease</h3>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src={neurological_diseases_img} className="disease-img card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Neurological Disease</h3>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}
