import { h } from 'preact';
import render from 'preact-render-to-string';
import Content from 'react-icons/lib/md/library-books'
import Strategy from 'react-icons/lib/md/equalizer'
import Sm from 'react-icons/lib/md/share'
import Optimize from 'react-icons/lib/md/build'
import Research from 'react-icons/lib/md/youtube-searched-for'
import Traffic from 'react-icons/lib/md/supervisor-account'

const Special = () => (
	<div className="section">
    <div className="shell">
      <div className="section_head">
        <h2>Why choose us</h2>
        <p>Quisque non erat mi. Etiam congue et augue sed tempus. Aenean sed ipsum luctus, scelerisque ipsum nec, iaculis justo. Sed at vestibulum purus, sit amet viverra diam nulla ac nisi rhoncus.</p>
      </div>
      <div className="section_body">
        <div className="divisions">
          <div className="division">
            <div className="division-pic">
              <Content size={34} color="#66bb6a"/>
            </div>
            <div className="division-content">
              <h4>Content</h4>
              <p>Porttitor communicate pandemic data rather than enabled niche markets neque pulvinar vitae.</p>
            </div>
          </div>
          <div className="division">
            <div className="division-pic">
              <Strategy size={34} color="#66bb6a"/>
            </div>
            <div className="division-content">
              <h4>Strategy</h4>
              <p>Porttitor communicate pandemic data rather than enabled niche markets neque pulvinar vitae.</p>
            </div>
          </div>
          <div className="division">
            <div className="division-pic">
              <Sm size={34} color="#66bb6a"/>
            </div>
            <div className="division-content">
              <h4>Social Media</h4>
              <p>Porttitor communicate pandemic data rather than enabled niche markets neque pulvinar vitae.</p>
            </div>
          </div>
          <div className="division">
            <div className="division-pic">
              <Optimize size={34} color="#66bb6a"/>
            </div>
            <div className="division-content">
              <h4>Optimize</h4>
              <p>Porttitor communicate pandemic data rather than enabled niche markets neque pulvinar vitae.</p>
            </div>
          </div>
          <div className="division">
            <div className="division-pic">
              <Research size={34} color="#66bb6a"/>
            </div>
            <div className="division-content">
              <h4>Keyword Research</h4>
              <p>Porttitor communicate pandemic data rather than enabled niche markets neque pulvinar vitae.</p>
            </div>
          </div>
          <div className="division">
            <div className="division-pic">
              <Traffic size={34} color="#66bb6a"/>
            </div>
            <div className="division-content">
              <h4>Traffic</h4>
              <p>Porttitor communicate pandemic data rather than enabled niche markets neque pulvinar vitae.</p>
            </div>
          </div>
        </div>
        <div className="promo">
					<div className="promo_content">
						<h2>Get awesome marketing services</h2>
						<p>Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
					</div>
					<a className="btn-contact" href="#">Get it now</a>
        </div>
      </div>
    </div>
  </div>
);

export default Special;
