/** @format */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PublicRoutes from './routes/PublicRoutes';
import Loader from './components/Loader'; // 👈 Import Loader

function AppWrapper() {
	return (
		<Routes>
			{/* ✅ Only public pages like /, /about, /contact etc. */}
			<Route path="/*" element={<PublicRoutes />} />
		</Routes>
	);
}

export default function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Show loader for 2 seconds (simulate initial page load)
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<BrowserRouter>
			{loading ? <Loader /> : <AppWrapper />}
		</BrowserRouter>
	);
}
