import React from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';
import { colors } from '../themes';

export default function Contact() {
	return (
		<ContactSection>
			<ContactForm>
				<Subject>
					<TextField
						id="outlined-basic"
						label="What would you like to talk to us about?"
						variant="outlined"
					></TextField>
					<TextField
						id="outlined-basic"
						label="Email to get a hold of you"
						variant="outlined"
					></TextField>
				</Subject>
				<TextField
					id="outlined-multiline-static"
					label="Describe how we can help you"
					multiline
					rows={4}
					variant="outlined"
				></TextField>
				<Button variant="contained" color='primary'>
					Primary
				</Button>
			</ContactForm>
		</ContactSection>
	);
}

const ContactSection = styled.div`
	background-color: gray;
	width: 70%;
	margin: 6rem auto;
`;

const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
`;

const Subject = styled.div`
    display: flex;
    justify-content: space-evenly;

`;
