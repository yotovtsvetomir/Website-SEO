import { h } from 'preact';
import render from 'preact-render-to-string';

const Cases = () => (
	<div className="section bg-gray">
    <div className="shell">
      <div className="section_head">
        <h2>Case Studies</h2>
        <p>Quisque non erat mi. Etiam congue et augue sed tempus. Aenean sed ipsum luctus, scelerisque ipsum nec, iaculis justo. Sed at vestibulum purus, sit amet viverra diam nulla ac nisi rhoncus. </p>
      </div>
      <div className="section_body">
        <div className="portfolio-container">
          <div className="categories">
            <a className="active" href="#">All</a>
            <a href="#">Websites</a>
            <a href="#">Branding</a>
            <a href="#">Marketing</a>
            <a href="#">Analysis</a>
          </div>
          <div className="portfolio">
            <a className="item" href="#">
              <img src="../assets/portfolio-1.jpg"/>
            </a>
            <a className="item" href="#">
              <img src="../assets/portfolio-2.jpg"/>
            </a>
            <a className="item" href="#">
              <img src="../assets/portfolio-3.jpg"/>
            </a>
            <a className="item" href="#">
              <img src="../assets/portfolio-4.jpg"/>
            </a>
            <a className="item" href="#">
              <img src="../assets/portfolio-5.jpg"/>
            </a>
            <a className="item" href="#">
              <img src="../assets/portfolio-6.jpg"/>
            </a>
            <a className="item" href="#">
              <img src="../assets/portfolio-7.jpg"/>
            </a>
            <a className="item" href="#">
              <img src="../assets/portfolio-8.jpg"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Cases;
