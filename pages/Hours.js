import React from 'react';
import styled from 'styled-components';
import { colors, mq } from '../themes';
import coals from '../public/latbok-n4au.jpeg';

export default function Hours() {
	return (
		<HoursSection>
			<HoursText>
				<StyledTitle>Hours</StyledTitle>
				<Schedule>
					<DayRow>
						<p>Sunday</p>
						<ExpandingEllipse>
							......................................................................................................
						</ExpandingEllipse>
						<p>10am - 2pm</p>
					</DayRow>
					<DayRow>
						<p>Monday</p>
						<ExpandingEllipse>
							......................................................................................................
						</ExpandingEllipse>
						<p>Closed</p>
					</DayRow>
					<DayRow>
						<p>Tuesday</p>
						<ExpandingEllipse>
							......................................................................................................
						</ExpandingEllipse>
						<p>4pm - 11pm</p>
					</DayRow>
					<DayRow>
						<p>Wednesday</p>
						<ExpandingEllipse>
							......................................................................................................
						</ExpandingEllipse>
						<p>4pm - 11pm</p>
					</DayRow>
					<DayRow>
						<p>Thursday</p>
						<ExpandingEllipse>
							......................................................................................................
						</ExpandingEllipse>
						<p>4pm - 11pm</p>
					</DayRow>
					<DayRow>
						<p>Friday</p>
						<ExpandingEllipse>
							......................................................................................................
						</ExpandingEllipse>
						<p>10am - 2pm & 4pm - 11pm</p>
					</DayRow>
					<DayRow>
						<p>Saturday</p>
						<ExpandingEllipse>
							......................................................................................................
						</ExpandingEllipse>
						<p>10am - 2pm & 4pm - 11pm</p>
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
	border: 1px solid white;
	width: 70%;
	margin: 15% auto;
	background-color: ${colors.cyanBlue};
	display: flex;
	position: relative;
	${mq({ flexDirection: ['column', 'row'] })};


	img {
		// position: absolute;
		${mq({ position: ['static', 'absolute'] })};

		right: 2rem;
		top: -2rem;
		max-width: 100%;
		max-height: 120%;
	}
`;

const HoursText = styled.div`
	${mq({ width: ['80%', '50%'] })};
	margin: 2rem auto;
`;

const StyledTitle = styled.div`
	font-family: 'Great Vibes', cursive;
	font-size: 3rem;
	font-weight: bold;
	${mq({ textAlign: ['center', 'left'] })};
`;

const Schedule = styled.div`
	display: flex;
	flex-direction: column;
`;

const DayRow = styled.div`
	display: flex;
	flex-direction: row;
	// justify-content: space-between;
`;

const ExpandingEllipse = styled.div`
	width: 1rem;
	flex-grow: 1;
	overflow: hidden;
	text-overflow: ellipses;
`;
