import React from 'react';
import styled from 'styled-components';
import { colors } from '../themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Socialbar(props) {
	const { vertical } = props;

    //todo get rid of my email when I get the 7ayati company email
	return vertical ? (
		<SocialContainerVert>
			<a
				href="mailto: ploflan@gmail.com"
				target="_blank"
			>
				<SocialIcon icon={['far', 'envelope']} />
			</a>
			<a
				href={'https://instagram.com/'}
				target="_blank"
			>
				<SocialIcon icon={['fab', 'instagram']} />
			</a>
			<a
				href={'https://twitter.com/'}
				target="_blank"
			>
				<SocialIcon icon={['fab', 'twitter']} />
			</a>
			<a
				href={'https://facebook.com/'}
				target="_blank"
			>
				<SocialIcon icon={['fab', 'facebook']} />
			</a>
			<a
				href={'https://pinterest.com/'}
				target="_blank"
			>
				<SocialIcon icon={['fab', 'pinterest']} />
			</a>
		</SocialContainerVert>
	) : (
		<SocialContainerHor>
			<a
				href="mailto: ploflan@gmail.com"
				target="_blank"
			>
				<SocialIcon icon={['far', 'envelope']} />
			</a>
			<a
				href={'https://instagram.com/'}
				target="_blank"
			>
				<SocialIcon icon={['fab', 'instagram']} />
			</a>
			<a
				href={'https://twitter.com/'}
				target="_blank"
			>
				<SocialIcon icon={['fab', 'twitter']} />
			</a>
			<a
				href={'https://facebook.com/'}
				target="_blank"
			>
				<SocialIcon icon={['fab', 'facebook']} />
			</a>
			<a
				href={'https://pinterest.com/'}
				target="_blank"
			>
				<SocialIcon icon={['fab', 'pinterest']} />
			</a>
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
	z-index: 99;
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
