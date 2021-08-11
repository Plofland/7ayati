import React from 'react';
import styled from 'styled-components';
import { colors } from '../themes';

export default function Footer() {
	return (
		<StyledDiv>
			<StyledHours>
				<p>Hours will go here</p>
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
						Fri{' '}
						<DayHours>10am-2pm 4pm-12</DayHours>
					</DayDiv>
					<DayDiv>
						Sat{' '}
						<DayHours>10am-2pm 4pm-12</DayHours>
					</DayDiv>
				</HoursTable>
			</StyledHours>
			<StyledLegal>
				<p>
					Legal Stuff will go here 7ayati Café &
					Hookah Lounge LLC ©7ayati
				</p>
			</StyledLegal>
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	background-color: ${colors.grayChateau};
	display: flex;
	flex-direction: column;
`;

const StyledHours = styled.div`
	border: 1px solid black;
	text-align: center;
`;

const HoursTable = styled.div`
	border: 1px solid black;
`;

const DayDiv = styled.div`
	border: 1px solid black;
`;
const DayHours = styled.div`
	border: 1px solid black;
`;

const StyledLegal = styled.div`
	border: 1px solid black;
	text-align: center;
`;
