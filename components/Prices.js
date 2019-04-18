import { h } from 'preact';
import render from 'preact-render-to-string';

const Prices = () => (
	<div className="section bg-gray">
    <div className="shell">
      <div className="section_head">
        <h2>Pricing Table</h2>
        <p>Quisque non erat mi. Etiam congue et augue sed tempus. Aenean sed ipsum luctus, scelerisque ipsum nec, iaculis justo. Sed at vestibulum purus, sit amet viverra diam nulla ac nisi rhoncus.</p>
      </div>
      <div className="section_body">
        <div className="prices">
          <div className="price">
            <div className="price_head">
              <h2>Basic</h2>
              <div className="decor">
                <span>$</span>
                <span>59</span>
                <span>/Day</span>
              </div>
            </div>
            <div className="price_body">
              <div className="conditions">
                <p>Keyword</p>
                <p>Time Tracking</p>
                <p>Man Hour</p>
                <p><del>Workshop</del></p>
                <p><del>Certificate</del></p>
              </div>
              <div className="price_actions">
                <a className="btn-contact" href="#">Buy now</a>
              </div>
            </div>
          </div>
          <div className="price">
            <div className="price_head">
              <h2>Standard</h2>
              <div className="decor">
                <span>$</span>
                <span>79</span>
                <span>/Day</span>
              </div>
            </div>
            <div className="price_body">
              <div className="conditions">
                <p>Front Seats</p>
                <p>Free Snacks</p>
                <p>Printed T-Shirts</p>
                <p>Workshop</p>
                <p><del>Certificate</del></p>
              </div>
              <div className="price_actions">
                <a className="btn-contact" href="#">Buy now</a>
              </div>
            </div>
          </div>
          <div className="price">
            <div className="price_head">
              <h2>Premium</h2>
              <div className="decor">
                <span>$</span>
                <span>99</span>
                <span>/Day</span>
              </div>
            </div>
            <div className="price_body">
              <div className="conditions">
                <p>Front Seats</p>
                <p>Free Snacks</p>
                <p>Printed T-Shirts</p>
                <p>Workshop</p>
                <p>Certificate</p>
              </div>
              <div className="price_actions">
                <a className="btn-contact" href="#">Buy now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Prices;
