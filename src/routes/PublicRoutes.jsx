import { Routes, Route } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import Home from '../pages/landing/Home';
import About from '../pages/about/About';
import Services from '../pages/services/Services';
import Contact from '../pages/contact/Contact';
import Career from '../pages/career/Career';
import ServicesPage from '../pages/servicespage/ServicesPage';
import BlogDetail from '../pages/blog/BlogDetail';

export default function PublicRoutes() {
	return (
		<Routes>
			<Route element={<PublicLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/products" element={<Services />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/services" element={<ServicesPage />} />
				<Route path="/career" element={<Career />} />
				<Route path="/blog/:id" element={<BlogDetail />} />
			</Route>
		</Routes>
	);
}
