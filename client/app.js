import React from "react";
import Home from './components/Home'
import Routes from './routes'
import Navbar from './components/Navbar'

const App = () => {
	return (
		<div>
			<Navbar/>
			<Routes/>
		</div>
	);
};

export default App;
