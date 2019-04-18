import { h } from 'preact';
import render from 'preact-render-to-string';
import Check from 'react-icons/lib/md/check';

const Services = () => (
	<div className="section darkbg">
    <div className="shell">
      <div className="section_head light-left m30">
				<div className="flexer">
					<div className="divider60">
						<h2>We Offer a Full Range of Digital Marketing Services!</h2>
						<p>Quisque non erat mi. Etiam congue et augue sed tempus. Aenean sed ipsum luctus, scelerisque ipsum nec, iaculis justo. Sed at vestibulum purus, sit amet viverra diam. </p>
						<div className="checks">
							<div>
								<Check size={20} color="#fff" />
								<span>We deliver Top Rankings.</span>
							</div>
							<div>
								<Check size={20} color="#fff" />
								<span>High customer retention rate.</span>
							</div>
							<div>
								<Check size={20} color="#fff" />
								<span>We always return e-mails and calls within one business day.</span>
							</div>
						</div>
						<div className="services-actions">
							<a href="#" className="btn-contact">Contact Us</a>
						</div>
					</div>
					<div className="divider40">
						<div className="services-image">
							<img src="../assets/seo-info-light.png" />
						</div>
					</div>
				</div>
			</div>
    </div>
  </div>
);

export default Services;
