import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
// import Home from "./components/home";
// import AboutUs from "./components/about";
import {
	Home,
	AboutUs,
	Users,
	NotFoundPage,
	UserProfile,
	SearchUser,
	Login,
	AuthProfile,
	Navbar,
} from './components';
import { useState } from 'react';

function App() {
	const [username, setUserName] = useState('');
	const [isLogged, setIsLogged] = useState(false);

	return (
		<div className="App">
			{/* <Navbar/> */}
			<Routes>
				{/* <Route path="/" element={<Navbar isLogged={isLogged} />}> */}
					<Route exact path="/" element={<Home />} />
					<Route path="/about" element={<AboutUs />} />
					<Route path="/users" element={<Users />} />
					<Route path="*" element={<NotFoundPage />} />
					<Route path="/users/user/:username" element={<UserProfile />} />
					<Route path="/search" element={<SearchUser />} />
					<Route
						path="/login"
						element={
							<Login setIsLogged={setIsLogged} setUsername={setUserName} />
						}
					/>
					<Route
						path="/authProfile"
						element={
							isLogged ? (
								<AuthProfile username={username} />
							) : (
								<Navigate replace to={'/login'} />
							)
						}
					/>
				{/* </Route> */}
			</Routes>
		</div>
	);
}

export default App;
