import Link from 'next/link';
import styled from 'styled-components';
import { colors, mq } from '../themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Socialbar(props) {
	const { vertical } = props;

	//todo get rid of my email when I get the 7ayati company email
	return vertical ? (
		<SocialContainerVert>
			<Link href="mailto: ploflan@gmail.com">
				<a
					target="_blank"
					rel="noreferrer"
					alt="Icon for email"
				>
					<SocialIcon
						icon={['far', 'envelope']}
						size="lg"
					/>
				</a>
			</Link>
			<Link
				href={
					'https://www.instagram.com/7ayatilounge/'
				}
			>
				<a
					target="_blank"
					rel="noreferrer"
					alt="Social Icon for Instagram"
				>
					<SocialIcon
						icon={['fab', 'instagram']}
						size="lg"
					/>
				</a>
			</Link>
			<Link href={'https://twitter.com/'}>
				<a
					target="_blank"
					rel="noreferrer"
					alt="Social Icon for Twitter"
				>
					<SocialIcon
						icon={['fab', 'twitter']}
						size="lg"
					/>
				</a>
			</Link>
			<Link href={'https://facebook.com/'}>
				<a
					target="_blank"
					rel="noreferrer"
					alt="Social Icon for Facebook"
				>
					<SocialIcon
						icon={['fab', 'facebook']}
						size="lg"
					/>
				</a>
			</Link>
			<Link href={'https://pinterest.com/'}>
				<a
					target="_blank"
					rel="noreferrer"
					alt="Social Icon for Pinterest"
				>
					<SocialIcon
						icon={['fab', 'pinterest']}
						size="lg"
					/>
				</a>
			</Link>
		</SocialContainerVert>
	) : (
		<SocialContainerHor>
			<Link href="mailto: ploflan@gmail.com">
				<a
					target="_blank"
					rel="noreferrer"
					alt="Icon for email"
				>
					<SocialIcon
						icon={['far', 'envelope']}
						size="2x"
					/>
				</a>
			</Link>
			<Link
				href={
					'https://www.instagram.com/7ayatilounge/'
				}
			>
				<a
					target="_blank"
					rel="noreferrer"
					alt="Social Icon for Instagram"
				>
					<SocialIcon
						icon={['fab', 'instagram']}
						size="2x"
					/>
				</a>
			</Link>
			<Link href={'https://twitter.com/'}>
				<a
					target="_blank"
					rel="noreferrer"
					alt="Social Icon for Twitter"
				>
					<SocialIcon
						icon={['fab', 'twitter']}
						size="2x"
					/>
				</a>
			</Link>
			<Link href={'https://facebook.com/'}>
				<a
					target="_blank"
					rel="noreferrer"
					alt="Social Icon for Facebook"
				>
					<SocialIcon
						icon={['fab', 'facebook']}
						size="2x"
					/>
				</a>
			</Link>
			<Link href={'https://pinterest.com/'}>
				<a
					target="_blank"
					rel="noreferrer"
					alt="Social Icon for Pinterest"
				>
					<SocialIcon
						icon={['fab', 'pinterest']}
						size="2x"
					/>
				</a>
			</Link>
		</SocialContainerHor>
	);
}

const SocialContainerVert = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	position: absolute;
	right: 2rem;
	z-index: 99;
	width: 2.5rem;

	a {
		color: ${colors.lightText};
		display: flex;
		justify-content: center;
	}
`;

const SocialContainerHor = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 80%;
	height: 3rem;
	
	a {
		display: contents;
		color: ${colors.darkText};
	}
`;

const SocialIcon = styled(FontAwesomeIcon)`
	${mq({ margin: ['.5rem', '.4rem', '0.5rem'] })};
`;
