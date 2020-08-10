import React from "react";
import aboutus from "../../Images/aboutus.jpg";
import Aboutinfo from "../Aboutinfo";
import tent from "../../Images/tent.png";
import food from "../../Images/food.png";
import health from "../../Images/health.png";
import trekleader from "../../Images/trekleader.png";
import equipments from "../../Images/equipments.png"
import { Parallax, Background } from "react-parallax";
import "../../main.scss";

function About() {
  return (
    <div className="">
      <Parallax bgImage={aboutus} bgImageAlt="trekvista about" strength={300}>
        <div className=" about-text mx-auto sticky animation-fadein">About Us</div>
        <div style={{ height: "300px", width: "1000px" }} />
      </Parallax>

      <div className=" container about-us-text">
        <p className="my-3"> <strong className="brand-name">TrekVista</strong> is a trekking organisation which organises treks in Uttarakhand. At trekvista we aim to build a strong trekking community. Quality services with affordability is our main concern. No-one knows mountains better than the locals. Taking this in concern we work with locals. With their expertise in trekking and their cheerful nature our customers love us. Come and explore the Himalayas with us.</p>
        <hr></hr>
      </div>

     
   

      <div>
        <Aboutinfo
          imgsrc={tent}
          classprop="tent"
          title="Accomodation"
          desc="We provide luxury and high quality tents at our camp sites. We also provide sleeping bags to keep you warm. "
        />

        <Aboutinfo
          imgsrc={food}
          classprop="iconshrink"
          title="Food"
          desc=" While hiking, eating healthy food is very important. We at Trekvista provide our trekkers with healthy as well as delicious food"
        />

        <Aboutinfo
          imgsrc={health}
          classprop="iconshrink"
          title="Health"
          desc=" When you are at high altitudes, maintaining your health is the most important thing. At TrekVista, we have pulse meters, oxygen meters and blood pressure apparatus to keep track of your health. First aid kits and general medicines are available with our trek leaders"
        />

        <Aboutinfo
          imgsrc={equipments}
          classprop="iconshrink"
          title="Trekking Gears"
          desc=" We provide trekking equipments like crampons which makes walking on snow a bit easier, gaiters to prevent snow and rocks to enter your shoes and headlamps incase we are hiking at night. Trekking poles/sticks can be rented. "  />

        <Aboutinfo
          imgsrc={trekleader}
          classprop="trekleader"
          title="Trek Leaders"
          desc=" Trek leader is one who leads you through your entire trek. You got a problem, trek leader has a solution. It is said that, 'if your trek leader ask you to jump, you jump. If you are asked to run, you run.' Our trek leaders are experts in hiking. They know all the whereabouts of the place. Can't deny that they are very great trekking companions"
        />
      </div>
    </div>
  );
}

export default About;
