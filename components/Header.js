import { h } from 'preact';
import render from 'preact-render-to-string';
import Menu from 'react-icons/lib/md/menu';

function show() {
	var nav = document.getElementById('mob-nav');

	if (nav.style.maxHeight == "") {
		nav.style.maxHeight = "500px";
	}
	else if (nav.style.maxHeight == "0px") {
		nav.style.maxHeight = "500px";
	}
	else {
		nav.style.maxHeight = "0";
	}
}

const Header = () => (
	<header>
		<div className="wrapp">
			<div className="shell">
				<div className="header-inner">
					<a className="logo" href="#"></a>
	        <a className="menu" onClick={show} >
	          <Menu size={35} color="#777777" />
	        </a>
					<div className="nav">
						<a className="active" href="">Home</a>
						<a href="">About Us</a>
						<a href="">Services</a>
						<a href="">Case Studies</a>
						<a href="">Contact</a>
					</div>
				</div>
	    </div>
		</div>
		<div className="mob-nav" id="mob-nav">
			<a className="active" href="">Home</a>
			<a href="">About Us</a>
			<a href="">Services</a>
			<a href="">Case Studies</a>
			<a href="">Contact</a>
		</div>
	</header>
);

export default Header;
