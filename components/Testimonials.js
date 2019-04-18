import { h } from 'preact';
import render from 'preact-render-to-string';
import Slider from "react-slick";

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
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 801,
          settings: {
            slidesToShow: 1
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

const Testimonials = () => (
	<div className="section bg-green">
    <div className="shell">
      <div className="testimonials-inner">
      <Slider {...settings}>
        <div>
          <div className="testimonial">
            <h2>"My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time."</h2>
            <h4>Steve Jobs</h4>
          </div>
        </div>
        <div>
          <div className="testimonial">
            <h2>"My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time."</h2>
            <h4>Steve Jobs</h4>
          </div>
        </div>
        <div>
          <div className="testimonial">
            <h2>"My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time."</h2>
            <h4>Steve Jobs</h4>
          </div>
        </div>
      </Slider>
      </div>
    </div>
  </div>
);

export default Testimonials;
