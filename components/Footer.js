import React from 'react';
import styled from 'styled-components';
import { colors } from '../themes';

export default function Footer() {
	return (
		<StyledDiv>
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
							<p>4pm-12</p>
						</DayHours>
					</DayDiv>
				</HoursTable>
			</StyledHours>
			<StyledLegal>
				Legal Stuff will go here 7ayati Café &
				Hookah Lounge LLC ©7ayati
			</StyledLegal>
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	background-color: ${colors.grayChateau};
	display: flex;
	flex-direction: column;
`;

const TableTitle = styled.p`
	font-weight: bold;
	font-size: 1.5rem;
    margin-bottom: .5%;
`;

const StyledHours = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1% 0;
`;

const HoursTable = styled.div`
	display: flex;
	flex-direction: row;
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
    padding: .5% 0;
`;
