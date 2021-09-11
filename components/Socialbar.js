import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { colors, mq } from '../themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Socialbar(props) {
	const { vertical } = props;

	//todo get rid of my email when I get the 7ayati company email
	return vertical ? (
		<SocialContainerVert>
			<Link
				href="mailto: ploflan@gmail.com"
				rel="noreferrer"
			>
				<a target="_blank">
					<SocialIcon
						icon={['far', 'envelope']}
					/>
				</a>
			</Link>
			<Link
				href={
					'https://www.instagram.com/7ayatilounge/'
				}
				rel="noreferrer"
			>
				<a target="_blank">
					<SocialIcon
						icon={['fab', 'instagram']}
					/>
				</a>
			</Link>
			<Link
				href={'https://twitter.com/'}
				rel="noreferrer"
			>
				<a target="_blank">
					<SocialIcon icon={['fab', 'twitter']} />
				</a>
			</Link>
			<Link
				href={'https://facebook.com/'}
				rel="noreferrer"
			>
				<a target="_blank">
					<SocialIcon
						icon={['fab', 'facebook']}
					/>
				</a>
			</Link>
			<Link
				href={'https://pinterest.com/'}
				rel="noreferrer"
			>
				<a target="_blank">
					<SocialIcon
						icon={['fab', 'pinterest']}
					/>
				</a>
			</Link>
		</SocialContainerVert>
	) : (
		<SocialContainerHor>
			<Link
				href="mailto: ploflan@gmail.com"
				rel="noreferrer"
			>
				<a target="_blank">
					<SocialIcon
						icon={['far', 'envelope']}
					/>
				</a>
			</Link>
			<Link
				href={
					'https://www.instagram.com/7ayatilounge/'
				}
				rel="noreferrer"
			>
				<a target="_blank">
					<SocialIcon
						icon={['fab', 'instagram']}
					/>
				</a>
			</Link>
			<Link
				href={'https://twitter.com/'}
				rel="noreferrer"
			>
				<a target="_blank">
					<SocialIcon icon={['fab', 'twitter']} />
				</a>
			</Link>
			<Link
				href={'https://facebook.com/'}
				rel="noreferrer"
			>
				<a target="_blank">
					<SocialIcon
						icon={['fab', 'facebook']}
					/>
				</a>
			</Link>
			<Link
				href={'https://pinterest.com/'}
				rel="noreferrer"
			>
				<a target="_blank">
					<SocialIcon
						icon={['fab', 'pinterest']}
					/>
				</a>
			</Link>
		</SocialContainerHor>
	);
}

const SocialContainerVert = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	right: 2rem;
	z-index: 99;

	a {
		color: ${colors.lightText};
	}
`;

const SocialContainerHor = styled.div`
	display: flex;
	flex-direction: row;

	a {
		color: ${colors.darkText};
	}
`;

const SocialIcon = styled(FontAwesomeIcon)`
	${mq({ width: ['35px', '25px', '30px'] })};
	${mq({ margin: ['1rem', '.4rem', '0.5rem'] })};
`;
