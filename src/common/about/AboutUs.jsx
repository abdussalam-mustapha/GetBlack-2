import React from 'react'
import aboutimg from "../../images/about-us.png"

const AboutUs = () => {

    const data = [
        {
          cover: <i class='fa-solid fa-truck-fast'></i>,
          title: "Excellent Delivery Service",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa-solid fa-id-card'></i>,
          title: "Safe Payment",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa-solid fa-shield'></i>,
          title: "Shop With Confidence ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa-solid fa-headset'></i>,
          title: "24/7 Support ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
      ]


  return (
    <>
    <div className="container about-container">
      <div className="about-section d_flex">
        <div className="about-text">
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Modi sit fuga veniam atque suscipit
             unde dolorem aspernatur quae optio temporibus.
        </div>
        <div className="about-img">
            <img src={aboutimg} alt="" />
        </div>
      </div>
      <div className="about-flex">
      {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
          </div>
      </div>
    </>
  )
}

export default AboutUs
