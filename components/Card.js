import { h } from 'preact';
import render from 'preact-render-to-string';
import ArrowRight from 'react-icons/lib/fa/long-arrow-right'

const Card = ({ image, title, text }) => (
	<div className="card">
    <div className="card-image">
      <img src={image} alt="" />
    </div>
		<div className="card-content">
			<h3>{title}</h3>
			<p>{text}</p>
			<div className="appear">
				<p>Learn More <ArrowRight size={14} color="#fff" /></p>
			</div>
		</div>
  </div>
);

export default Card;
