import React from "react";
import StepsNavbar from "../steps/StepsNavbar";
import "./plans.scss";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <>
      <StepsNavbar />
      <main className="plans">
        <div className="plans-child">
          <div className="plans-child__choose">
            <h5>STEP 1 OF 3</h5>
            <p>Choose the plan that’s right for you</p>
            <p>Downgrade or upgrade at any time.</p>
          </div>
          <div className="plans-pricing">
            <table>
              <thead>
                <tr>
                  <th style={{ width: "50%" }}></th>
                  <th id="plan-0">Basic</th>
                  <th id="plan-1">Standard</th>
                  <th id="plan-2">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly Price</td>
                  <td aria-label="Basic">$7.99</td>
                  <td aria-label="Standard">$10.99</td>
                  <td aria-label="Premium">$13.99</td>
                </tr>
                <tr>
                  <td>Video quality</td>
                  <td aria-label="Basic">Good</td>
                  <td aria-label="Standard">Better</td>
                  <td aria-label="Premium">Best</td>
                </tr>
                <tr>
                  <td>Resolution</td>
                  <td aria-label="Basic">480p</td>
                  <td aria-label="Standard">1080p</td>
                  <td aria-label="Premium">4K+HDR</td>
                </tr>
                <tr>
                  <td>Screens you can watch on at the same time</td>
                  <td aria-label="Basic">1</td>
                  <td aria-label="Standard">2</td>
                  <td aria-label="Premium">4</td>
                </tr>
                <tr>
                  <td>Watch on your TV, computer, mobile phone and tablet</td>
                  <td aria-label="Basic">
                    <FaCheck />
                  </td>
                  <td aria-label="Standard">
                    <FaCheck />
                  </td>
                  <td aria-label="Premium">
                    <FaCheck />
                  </td>
                </tr>
                <tr>
                  <td>Unlimited films and TV programmes</td>
                  <td aria-label="Basic">
                    <FaCheck />
                  </td>
                  <td aria-label="Standard">
                    <FaCheck />
                  </td>
                  <td aria-label="Premium">
                    <FaCheck />
                  </td>
                </tr>
                <tr>
                  <td>Cancel at any time</td>
                  <td aria-label="Basic">
                    <FaCheck />
                  </td>
                  <td aria-label="Standard">
                    <FaCheck />
                  </td>
                  <td aria-label="Premium">
                    <FaCheck />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <p>
              Full HD (1080p), Ultra HD (4K) and HDR availability subject to
              your internet service and device capabilities. Not all content
              available in HD, Full HD, Ultra HD or HDR. See
              <Link to="/">Terms of Use</Link> for more details.
            </p>
          </div>
          <div className="plans-child__btn">
            <Link to="/">continue</Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Plans;
