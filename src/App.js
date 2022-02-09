import { useState } from 'react';
import { useSelector } from 'react-redux';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Intro from './components/Intrduction/Intro';
import NavBar from './components/NavBar/NavBar';
import SkillList from './components/SkillList/SkillList';
import Toggle from './components/Toggle/Toggle';

function App() {
	const mode = useSelector((state) => state.theme.darkMode);

	return (
		<div
			style={{
				backgroundColor: `${mode ? '#222' : 'white'}`,
				color: `${mode ? 'white' : '#222'}`,
				display: 'flex',
				flexDirection: 'column',
			}}
			className='app'>
			<NavBar />
			{/* <Toggle /> */}
			<Intro />
			<About />
			<SkillList />
			<Contact />
		</div>
	);
}

export default App;
