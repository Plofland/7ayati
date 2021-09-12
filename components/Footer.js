import styled from 'styled-components';
import { breakpoints, colors, mq } from '../themes';
import Socialbar from './Socialbar';

import { useMediaQuery } from 'react-responsive';

export default function Footer() {
	const isMobile = useMediaQuery({
		maxWidth: breakpoints.mobile
	});

	return (
		<StyledFooter>
			<StyledHours>
				<TableTitle>Hours</TableTitle>
				<HoursTable>
					<DayDiv>
						Sun
						<DayHours>
							<p>10-2pm</p>
						</DayHours>
					</DayDiv>
					<DayDiv>
						Mon
						<DayHours>
							<p>Closed</p>
						</DayHours>
					</DayDiv>
					<DayDiv>
						Tues
						<DayHours>
							<p>4-11pm</p>
						</DayHours>
					</DayDiv>
					<DayDiv>
						Wed
						<DayHours>
							<p>4-11pm</p>
						</DayHours>
					</DayDiv>
					<DayDiv>
						Thur
						<DayHours>
							<p>4-11pm</p>
						</DayHours>
					</DayDiv>
					<DayDiv>
						Fri
						<DayHours>
							<p>10am-2pm</p>
							<p>4pm-12</p>
						</DayHours>
					</DayDiv>
					<DayDiv>
						Sat
						<DayHours>
							<p>10am-2pm</p>
							<p>4pm-12pm</p>
						</DayHours>
					</DayDiv>
				</HoursTable>
			</StyledHours>
			{isMobile && <Socialbar vertical={false} />}
			<StyledLegal>
				Legal Stuff will go here 7ayati Café &
				Hookah Lounge LLC ©7ayati
			</StyledLegal>
		</StyledFooter>
	);
}

const StyledFooter = styled.div`
	background-color: ${colors.grayChateau};
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TableTitle = styled.p`
	font-weight: bold;
	${mq({ fontSize: ['1rem', '1.25rem', '1.5rem'] })};
	margin: 1rem;
`;

const StyledHours = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${colors.darkText};
`;

const HoursTable = styled.div`
	display: flex;
	flex-direction: row;
`;

const DayDiv = styled.div`
	margin: 0 1rem;
	${mq({ fontSize: ['.8rem', '1rem', '1.2rem'] })};
`;

const DayHours = styled.div`
	flex-direction: column;

	p {
		${mq({ fontSize: ['.65rem', '.75rem', '.8rem'] })};
	}
`;

const StyledLegal = styled.p`
	text-align: center;
	font-size: 12px;
	${mq({ fontSize: ['.35rem', '.45rem', '.5rem'] })};
	padding: 0.5% 0;
	color: ${colors.darkText};
`;
