import React, { useRef, useState } from 'react';

import './contact.css';
import Email from '../../assets/icons/email.png';
import Address from '../../assets/icons/address.png';

import emailjs from 'emailjs-com';
import { useSelector } from 'react-redux';

const Contact = () => {
	const mode = useSelector((state) => state.theme.darkMode);

	const formRef = useRef();
	const [isSent, setIsSent] = useState();

	const handleForm = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_g4mboww',
				'template_eryar4f',
				formRef.current,
				'user_GtFn4mVnFqioVeatbPmqv'
			)
			.then(
				(result) => {
					console.log(result.text);
					setIsSent(true);
				},
				(error) => {
					console.log(error.text);
					setIsSent(false);
				}
			);
	};

	return (
		<div className='c'>
			<div className='c-bg'></div>
			<div className='c-wrapper'>
				<div className='c-left'>
					<h1 className='c-title'>Let's Connect</h1>
					<div className='c-info'>
						<div className='c-info-item'>
							<svg
								height='30px'
								id='Layer_1'
								version='1.1'
								viewBox='0 0 50 50'
								className='c-icon'
								width='30px'
								xmlns='http://www.w3.org/2000/svg'>
								<rect fill='none' height='50' width='50' />
								<path
									d='M30.217,35.252c0,0,4.049-2.318,5.109-2.875  c1.057-0.559,2.152-0.7,2.817-0.294c1.007,0.616,9.463,6.241,10.175,6.739c0.712,0.499,1.055,1.924,0.076,3.32  c-0.975,1.396-5.473,6.916-7.379,6.857c-1.909-0.062-9.846-0.236-24.813-15.207C1.238,18.826,1.061,10.887,1,8.978  C0.939,7.07,6.459,2.571,7.855,1.595c1.398-0.975,2.825-0.608,3.321,0.078c0.564,0.781,6.124,9.21,6.736,10.176  c0.419,0.66,0.265,1.761-0.294,2.819c-0.556,1.06-2.874,5.109-2.874,5.109s1.634,2.787,7.16,8.312  C27.431,33.615,30.217,35.252,30.217,35.252z'
									fill={`${mode ? 'white' : '#222'}`}
									stroke={`${mode ? 'white' : '#222'}`}
									strokeMiterlimit='10'
									strokeWidth='2'
								/>
							</svg>
							+91 8427514840
						</div>
						<div className='c-info-item'>
							<svg
								height='30px'
								className='c-icon'
								viewBox='0 0 96 96'
								fill={`${mode ? 'white' : '#222'}`}
								xmlns='http://www.w3.org/2000/svg'>
								<title />
								<path d='M48,0a48,48,0,0,0,0,96,6,6,0,0,0,0-12A36,36,0,1,1,84,48V66a6,6,0,0,1-12,0V48A24,24,0,1,0,48,72a23.7365,23.7365,0,0,0,12.2549-3.4783A17.9586,17.9586,0,0,0,96,66V48A48.0474,48.0474,0,0,0,48,0Zm0,60A12,12,0,1,1,60,48,12.0081,12.0081,0,0,1,48,60Z' />
							</svg>
							sachin.rathee.mail@gmail.com
						</div>
						<div className='c-info-item'>
							<svg
								id='Glyph'
								version='1.1'
								viewBox='0 0 32 32'
								className='c-icon'
								fill={`${mode ? 'white' : '#222'}`}
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M30.854,16.548C30.523,17.43,29.703,18,28.764,18H28v11c0,0.552-0.448,1-1,1h-6v-7c0-2.757-2.243-5-5-5  s-5,2.243-5,5v7H5c-0.552,0-1-0.448-1-1V18H3.235c-0.939,0-1.759-0.569-2.09-1.451c-0.331-0.882-0.088-1.852,0.62-2.47L13.444,3.019  c1.434-1.357,3.679-1.357,5.112,0l11.707,11.086C30.941,14.696,31.185,15.666,30.854,16.548z'
									id='XMLID_219_'
								/>
							</svg>
							ABC House, Lakhan Majra, Rohtak, Haryana - 124514.
						</div>
					</div>
				</div>
				<div className='c-right'>
					<p className='c-desc'>
						<b>Want to contact?</b> Get in touch. Always available on Mobile
						Phone, so to connect fast call on phone number.
					</p>
					<form ref={formRef} onSubmit={handleForm}>
						<input
							style={{ backgroundColor: `${mode ? '#333' : 'white'}` }}
							type='text'
							placeholder='Name'
							name='user_name'
						/>
						<input
							style={{ backgroundColor: `${mode ? '#333' : 'white'}` }}
							type='text'
							placeholder='Subject'
							name='user_subject'
						/>
						<input
							style={{ backgroundColor: `${mode ? '#333' : 'white'}` }}
							type='text'
							placeholder='Email'
							name='user_email'
						/>
						<textarea
							style={{ backgroundColor: `${mode ? '#333' : 'white'}` }}
							rows={4}
							placeholder='Message'
							name='message'
						/>
						<button>Submit</button>
						{isSent && <div>Thank You! I will respond you back.</div>}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
