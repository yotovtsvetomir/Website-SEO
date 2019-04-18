import { h } from 'preact';
import render from 'preact-render-to-string';
import Facebook from 'react-icons/lib/fa/facebook'
import Twitter from 'react-icons/lib/fa/twitter'
import Tumblr from 'react-icons/lib/fa/tumblr'
import Linkedin from 'react-icons/lib/fa/linkedin'
import Instagram from 'react-icons/lib/fa/instagram'
import ArrowUp from 'react-icons/lib/md/keyboard-arrow-up'

const Footer = () => (
	<footer className="footer">
		<div className="wrapp">
			<div className="shell">
				<div className="footer-inner">
					<a href="#" className="scroller">
						<ArrowUp size={47} color="#fff" />
					</a>
					<div className="socials">
						<ul>
							<li>
								<a href="#">
									<Facebook size={18} color="#fff" />
								</a>
							</li>
							<li>
								<a href="#">
									<Twitter size={18} color="#fff" />
								</a>
							</li>
							<li>
								<a href="#">
									<Tumblr size={18} color="#fff" />
								</a>
							</li>
							<li>
								<a href="#">
									<Linkedin size={18} color="#fff" />
								</a>
							</li>
							<li>
								<a href="#">
									<Instagram size={18} color="#fff" />
								</a>
							</li>
						</ul>
					</div>
					<div className="whitelogo">
						<a href="">
							<img src="../assets/strawberry-seo.svg" />
						</a>
					</div>
					<div className="copyright">
						<span>Copyright© 2019 <a href="#">Strawberry</a> | Developed by <a href="#">Tsvetomir Yotov</a></span>
					</div>
					<div className="footer_intro">
						<p>Penatibus tristique velit vestibulum adipiscing habitant aenean feugiat at condimentum aptent odio orci vulputate hac mollis a.Vestibulum adipiscing gravida justo a ac euismod vitae.</p>
					</div>
				</div>
			</div>
		</div>
		<div className="secondary-menu">
			<a href="">Home</a>
			<a href="">About Us</a>
			<a href="">Services</a>
			<a href="">Portfolio</a>
			<a href="">Contact</a>
		</div>
  </footer>
);

export default Footer;
