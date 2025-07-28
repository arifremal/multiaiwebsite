import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/home/logo.png';

export default function Navbar() {
	const location = useLocation();
	const isActive = (path) => location.pathname === path;
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);

	// Update scroll progress on scroll
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			const scrollPercent = (scrollTop / docHeight) * 100;
			setScrollProgress(scrollPercent);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Progress bar dynamic color: green → red
	const red = Math.min(255, scrollProgress * 2.55);
	const green = Math.max(0, 255 - scrollProgress * 2.55);
	const progressColor = `rgb(${red}, ${green}, 0)`;

	const navLinks = [
		{ to: '/', label: 'Home' },
		{ to: '/about', label: 'About' },
		{ to: '/products', label: 'Products' },
		{ to: '/contact', label: 'Contact' },
		{ to: '/services', label: 'Services' },
		{ to: '/career', label: 'Career' },
	];

	return (
		<>
			{/* Scroll Progress Bar */}
			<div
				style={{
					width: `${scrollProgress}%`,
					height: '4px',
					background: progressColor,
					transition: 'width 0.2s ease-out, background 0.2s ease-out',
				}}
				className="fixed top-0 left-0 z-[999]"
			></div>

			{/* Navbar */}
			<div className="fixed w-full top-0 z-50 bg-white shadow-md border-t border-transparent">
				<nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center space-x-2">
  <Link to="/">
    <img
      src={logo}
      alt="Logo"
      className="h-15 w-auto transition-transform duration-300 hover:scale-105 cursor-pointer"
    />
  </Link>
</div>

					{/* Desktop Nav Links */}
					<div className="hidden md:flex items-center space-x-6 text-xl font-small">
						{navLinks.map(({ to, label }) => (
							<Link
								key={to}
								to={to}
								className={`relative group transition-colors duration-300 ${
									isActive(to) ? 'text-green-600 font-small' : 'text-indigo-700'
								} hover:text-green-600`}
							>
								<span>{label}</span>
								<span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
							</Link>
						))}
					</div>

					{/* Desktop Buttons */}
					<div className="hidden md:flex items-center space-x-3 text-xl font-small">
						<Link
							to="/get-started"
							className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 shadow-sm"
						>
							Get Started
						</Link>
						<Link
							to="/signup"
							className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 transition duration-300"
						>
							Sign Up
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
							{mobileMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
						</button>
					</div>
				</nav>

				{/* Mobile Nav Menu */}
				{mobileMenuOpen && (
					<div className="md:hidden px-4 pb-4 space-y-4 bg-white shadow-md">
						{navLinks.map(({ to, label }) => (
							<Link
								key={to}
								to={to}
								onClick={() => setMobileMenuOpen(false)}
								className={`block text-sm font-medium ${
									isActive(to) ? 'text-green-600 font-semibold' : 'text-indigo-700'
								} hover:text-green-600 transition`}
							>
								{label}
							</Link>
						))}

						<div className="flex flex-col space-y-2 pt-2">
							<Link
								to="/get-started"
								className="bg-indigo-600 text-white text-center px-4 py-2 rounded-md hover:bg-indigo-700 transition"
							>
								Get Started
							</Link>
							<Link
								to="/signup"
								className="border border-indigo-600 text-indigo-600 text-center px-4 py-2 rounded-md hover:bg-indigo-50 transition"
							>
								Sign Up
							</Link>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
