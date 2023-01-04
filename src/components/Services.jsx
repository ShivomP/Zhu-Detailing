import React from 'react'
import HandWash from '../assets/handwash.png'
import MaitDetail from '../assets/maitenancedetail.png'
import ExtDetail from '../assets/exteriordetail.png'
import IntDetail from '../assets/interiordetail.png'
import ComDetail from '../assets/completedetail.png'
import Add from '../assets/add.png'

function Services() {
  return (
    <section id='services'>
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Services
          </h1>
          <ul className="service__list">
            <li className="service">
              <div className="service__title"><b>Professional Hand Wash</b></div>
              <div className="service__wrapper">
                <img src={HandWash} alt="" className="service__img" />
                <div className="service__wrapper--bg"></div>
                <div className="service__description">
                  <h3 className="service__description--price">
                    Price: $35
                  </h3>
                  <p className="service__description--para">
                    <b>Description:</b> Gentle exterior hand wash removing dust and grome while preventing scratches.
                    This option is to keep your car looking sleek and healthy.
                  </p>
                </div>
              </div>
            </li>
            <li className="service">
              <div className="service__title"><b>Maintenance Detail</b></div>
              <div className="service__wrapper">
                <img src={MaitDetail} alt="" className="service__img" />
                <div className="service__wrapper--bg"></div>
                <div className="service__description">
                  <h3 className="service__description--price">
                    Price: $65
                  </h3>
                  <p className="service__description--para">
                    <b>Description:</b> This option includes and exterior hand-wash, vacumming, and wipe down 
                    of glass and interior surfaces. This option is reserved for cars in good 
                    condition that want a quick pick me up to maintain appearance.
                  </p>
                </div>
              </div>
            </li>
            <li className="service">
              <div className="service__title"><b>Exterior Premium Detail</b></div>
              <div className="service__wrapper">
                <img src={ExtDetail} alt="" className="service__img" />
                <div className="service__wrapper--bg"></div>
                <div className="service__description">
                  <h3 className="service__description--price">
                    Price: $100
                  </h3>
                  <p className="service__description--para">
                    <b>Description:</b> A full wash of the exterior that removes all surfaces dirt, road tar, and iron
                    fallout. After the car is coated in carnauba wax. Your exterior will be protected
                    and look straight off the lot.
                  </p>
                </div>
              </div>
            </li>
            <li className="service">
              <div className="service__title"><b>Interior Premium Detail</b></div>
              <div className="service__wrapper">
                <img src={IntDetail} alt="" className="service__img" />
                <div className="service__wrapper--bg"></div>
                <div className="service__description">
                  <h3 className="service__description--price">
                    Price: $155
                  </h3>
                  <p className="service__description--para">
                    <b>Description:</b>  Deep interior cleaning that will include a thorough vacumming, wipe down
                    of the interior surfaces, glass cleaning, leather seat cleaning, leather seat
                    conditioning, fabric seat and carpet steam cleaning, with a complimentart exterior
                    hand-wash.
                  </p>
                </div>
              </div>
            </li>
            <li className="service">
              <div className="service__title"><b>Complete Detail</b></div>
              <div className="service__wrapper">
                <img src={ComDetail} alt="" className="service__img" />
                <div className="service__wrapper--bg"></div>
                <div className="service__description">
                  <h3 className="service__description--price">
                    Price: $220
                  </h3>
                  <p className="service__description--para">
                    <b>Description:</b> This option is the best for a full service deep clean on both the interior
                    and exterior of your vehicle.
                  </p>
                </div>
              </div>
            </li>
            <li className="service">
              <div className="service__title"><b>Add Ons</b></div>
              <div className="service__wrapper">
                <img src={Add} alt="" className="service__img" />
                <div className="service__wrapper--bg"></div>
                <div className="service__description">
                  <h3 className="service__description--price">
                    Fabric Stain Remover: $35
                  </h3>
                  <p className="service__description--para">
                    <b>Description:</b> This option is only available with the purchase of the interior premium detail or complete detail.
                  </p>
                  <h3 className="service__description--price">
                    Pain Sealant: $50
                  </h3>
                  <p className="service__description--para">
                    <b>Description:</b> This option is only available with the purchase of the exterior premium detail or complete detail.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services
