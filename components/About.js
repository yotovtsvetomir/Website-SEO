import { h } from 'preact';
import render from 'preact-render-to-string';
import Slider from "react-slick";
import Card from './Card'


const settings = {
      customPaging: function(i) {
        return (
          <a className="mydot"></a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      focusOnSelect: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 801,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };

const About = () => (
	<div className="section">
    <div className="shell">
      <div className="section_head">
        <h2>What we do</h2>
        <p>Quisque non erat mi. Etiam congue et augue sed tempus. Aenean sed ipsum luctus, scelerisque ipsum nec, iaculis justo. Sed at vestibulum purus, sit amet viverra diam nulla ac nisi rhoncus.</p>
      </div>
      <div className="section_body">
      <Slider {...settings}>
        <div>
          <Card image="../assets/service-1.jpg" title="Web Optimize" text="Porttitor communicate pandemic data rather than enabled niche pandemic data rather markets" />
        </div>
        <div>
          <Card image="../assets/service-2.jpg" title="Data Analysis" text="Porttitor communicate pandemic data rather than enabled niche pandemic data rather markets" />
        </div>
        <div>
          <Card image="../assets/service-3.jpg" title="Development" text="Porttitor communicate pandemic data rather than enabled niche pandemic data rather markets" />
        </div>
        <div>
          <Card image="../assets/service-4.jpg" title="Marketing" text="Porttitor communicate pandemic data rather than enabled niche pandemic data rather markets" />
        </div>
        <div>
          <Card image="../assets/service-5.jpg" title="Big Data" text="Porttitor communicate pandemic data rather than enabled niche pandemic data rather markets" />
        </div>
        <div>
          <Card image="../assets/service-6.jpg" title="Mobile Marketing" text="Porttitor communicate pandemic data rather than enabled niche pandemic data rather markets" />
        </div>
        <div>
          <Card image="../assets/service-7.jpg" title="Data Organize" text="Porttitor communicate pandemic data rather than enabled niche pandemic data rather markets" />
        </div>
        <div>
          <Card image="../assets/service-8.jpg" title="Pay Per Click" text="Porttitor communicate pandemic data rather than enabled niche pandemic data rather markets" />
        </div>
      </Slider>
      </div>
    </div>
  </div>
);

export default About;
