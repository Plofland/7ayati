import React from 'react';
import styled from 'styled-components';
import { colors } from '../themes';
import coals from '../assets/latbok-n4au.jpeg';

export default function Hours() {
	return (
		<HoursSection>
			<HoursText>
				<StyledTitle>Hours</StyledTitle>
				<Schedule>
					<DayRow>
						<Day>Sunday</Day>
						<ExpandingEllipse>
							...
						</ExpandingEllipse>
						<OpenHours>10am - 2pm</OpenHours>
					</DayRow>
					<DayRow>
						<Day>Monday</Day>
						<ExpandingEllipse>
							...
						</ExpandingEllipse>
						<OpenHours>Closed</OpenHours>
					</DayRow>
					<DayRow>
						<Day>Tuesday</Day>
						<ExpandingEllipse>
							...
						</ExpandingEllipse>
						<OpenHours>4pm - 11pm</OpenHours>
					</DayRow>
					<DayRow>
						<Day>Wednesday</Day>
						<ExpandingEllipse>
							...
						</ExpandingEllipse>
						<OpenHours>4pm - 11pm</OpenHours>
					</DayRow>
					<DayRow>
						<Day>Thursday</Day>
						<ExpandingEllipse>
							...
						</ExpandingEllipse>
						<OpenHours>4pm - 11pm</OpenHours>
					</DayRow>
					<DayRow>
						<Day>Friday</Day>
						<ExpandingEllipse>
							...
						</ExpandingEllipse>
						<OpenHours>
							10am - 2pm & 4pm - 11pm
						</OpenHours>
					</DayRow>
					<DayRow>
						<Day>Saturday</Day>
						<ExpandingEllipse>
							...
						</ExpandingEllipse>
						<OpenHours>
							10am - 2pm & 4pm - 11pm
						</OpenHours>
					</DayRow>
				</Schedule>
			</HoursText>
			<img
				src={coals.src}
				alt="red hot glowing coal cubes"
			/>
		</HoursSection>
	);
}

const HoursSection = styled.div`
	width: 70%;
	margin: 15% auto;
	background-color: ${colors.cyanBlue};
	display: flex;

	img {
		position: absolute;
		right: 4rem;
		max-width: 100%;
		max-height: 120%;
	}
`;

const HoursText = styled.div`
	text-align: center;
	width: 50%;
	margin: 2rem;
	border: 1px solid white;
`;

const StyledTitle = styled.div`
	font-family: 'Great Vibes', cursive;
	font-size: 3rem;
	font-weight: bold;
	margin-left: 0;
	text-align: left;
`;

const Schedule = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const DayRow = styled.div`
	width: 100%;
    display: flex;
	flex-direction: row;
    justify-content: space-between;
`;

const Day = styled.p`
	border: 1px solid orange;
`;

const OpenHours = styled.p`
	border: 1px solid black;
`;

const ExpandingEllipse = styled.div`
	width: 2rem;
	border: 1px solid green;
`;
