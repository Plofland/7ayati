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
							...........................................................................................................................
						</ExpandingEllipse>
						<p>10am - 2pm</p>
					</DayRow>
					<DayRow>
						<p>Monday</p>
						<ExpandingEllipse>
							...........................................................................................................................
						</ExpandingEllipse>
						<p>Closed</p>
					</DayRow>
					<DayRow>
						<p>Tuesday</p>
						<ExpandingEllipse>
							...........................................................................................................................
						</ExpandingEllipse>
						<p>4pm - 11pm</p>
					</DayRow>
					<DayRow>
						<p>Wednesday</p>
						<ExpandingEllipse>
							...........................................................................................................................
						</ExpandingEllipse>
						<p>4pm - 11pm</p>
					</DayRow>
					<DayRow>
						<p>Thursday</p>
						<ExpandingEllipse>
							...........................................................................................................................
						</ExpandingEllipse>
						<p>4pm - 11pm</p>
					</DayRow>
					<DayRow>
						<p>Friday</p>
						<ExpandingEllipse>
							...........................................................................................................................
						</ExpandingEllipse>
						<p>10am - 2pm & 4pm - 11pm</p>
					</DayRow>
					<DayRow>
						<p>Saturday</p>
						<ExpandingEllipse>
							...........................................................................................................................
						</ExpandingEllipse>
						<p>10am - 2pm & 4pm - 11pm</p>
					</DayRow>
				</Schedule>
			</HoursText>
			<ImageContainer>
				<img
					src={coals.src}
					alt="red hot glowing coal cubes"
				/>
			</ImageContainer>
		</HoursSection>
	);
}

const HoursSection = styled.div`
	display: flex;
	${mq({ flexDirection: ['column', 'column', 'row'] })};
	align-items: center;
	justify-content: space-evenly;
	${mq({ width: ['90%', '70%', '70%'] })};
	${mq({
		margin: ['20vh auto', '20vh auto', '10vh auto']
	})};
	background-color: ${colors.cyanBlue};
`;

const HoursText = styled.div`
	${mq({ width: ['80%', '70%', '40%'] })};
	margin: 1rem;
`;

const StyledTitle = styled.div`
	font-family: 'Great Vibes', cursive;
	font-size: 3rem;
	font-weight: bold;
	${mq({ textAlign: ['center', 'center', 'left'] })};
`;

const Schedule = styled.div`
	display: flex;
	flex-direction: column;
`;

const DayRow = styled.div`
	display: flex;
	flex-direction: row;

	p {
		text-align: center;
	}
`;

const ExpandingEllipse = styled.div`
	width: 1rem;
	display: flex;
	align-items: center;
	flex-grow: 1;
	overflow: hidden;
	text-overflow: ellipses;
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	margin: 2rem 1rem;
	${mq({ width: ['80%','50%', '50%'] })};

	img {
		${mq({
			position: ['static', 'static', 'absolute']
		})};
		height: 70vh;
	}
`;
