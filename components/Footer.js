import React from 'react';
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
						Sun <DayHours>10-2pm</DayHours>
					</DayDiv>
					<DayDiv>
						Mon <DayHours>Closed</DayHours>
					</DayDiv>
					<DayDiv>
						Tues <DayHours>4-11pm</DayHours>
					</DayDiv>
					<DayDiv>
						Wed <DayHours>4-11pm</DayHours>
					</DayDiv>
					<DayDiv>
						Thur <DayHours>4-11pm</DayHours>
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
`;

const HoursTable = styled.div`
	display: flex;
	flex-direction: row;
	${mq({ fontSize: ['.5rem', '.75rem', '1rem'] })};
`;

const DayDiv = styled.div`
	margin: 0 1rem;
`;

const DayHours = styled.p`
	flex-direction: column;
`;

const StyledLegal = styled.p`
	text-align: center;
	font-size: 12px;
	${mq({ fontSize: ['.35rem', '.45rem', '.5rem'] })};
	padding: 0.5% 0;
`;
