import React from 'react';
import styled from 'styled-components';
import { colors } from '../themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Socialbar(props) {
	const { vertical } = props;

	return vertical ? (
		<SocialContainerVert>
			<SocialIcon icon={['far', 'envelope']} />
			<SocialIcon icon={['fab', 'instagram']} />
			<SocialIcon icon={['fab', 'twitter']} />
			<SocialIcon icon={['fab', 'facebook']} />
			<SocialIcon icon={['fab', 'pinterest']} />
		</SocialContainerVert>
	) : (
		<SocialContainerHor>
			<SocialIcon icon={['far', 'envelope']} />
			<SocialIcon icon={['fab', 'instagram']} />
			<SocialIcon icon={['fab', 'twitter']} />
			<SocialIcon icon={['fab', 'facebook']} />
			<SocialIcon icon={['fab', 'pinterest']} />
		</SocialContainerHor>
	);
}

const SocialContainerVert = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	right: 2rem;
	margin-top: 2rem;
	color: ${colors.lightText};
`;
const SocialContainerHor = styled.div`
	display: flex;
	flex-direction: row;
	color: ${colors.darkText};
`;

const SocialIcon = styled(FontAwesomeIcon)`
	width: 2rem;
	margin: 0.5rem;
`;
