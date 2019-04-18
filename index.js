import './styles/style.scss';
import { h } from 'preact'
import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'
import Services from './components/Services'
import Special from './components/Special'
import Cases from './components/Cases'
import Testimonials from './components/Testimonials'
import Clients from './components/Clients'
import Prices from './components/Prices'
import Blog from './components/Blog'
import Footer from './components/Footer'


const App = () => (
	<div>
		<Header />
		<Intro />
		<About />
		<Services />
		<Special />
		<Cases />
		<Testimonials />
		<Clients />
		<Prices />
		<Blog />
		<Footer />
	</div>
);

export default App;
