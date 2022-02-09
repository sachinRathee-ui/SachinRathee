import React from 'react';
import Skill from '../Skill/Skill';
import { skills } from '../../data/Data';
import './skillList.css';

const SkillList = () => {
	return (
		<div className='s'>
			<div className='s-wrapper'>
				<h1 className='s-heading'>Skills</h1>
				<div className='s-items'>
					{skills.map((skill) => (
						<Skill key={skill.id} title={skill.title} level={skill.level} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SkillList;
