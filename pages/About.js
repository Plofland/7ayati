import React from 'react'
import styled from 'styled-components'
import Image from 'next'
import Text from '../components/Text'

export default function About() {
    return (
        <>  
            <AboutText>
                <h2>
                    About Me
                </h2>
                <Text variant={variant.body}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac pulvinar vitae ipsum, lectus nisi. Consectetur dui interdum congue vitae ultrices. Lobortis vel id facilisi netus. Potenti habitasse id tellus est  , aenean. Laoreet ac etiam pharetra faucibus integer purus duis elit at. Convallis semper quis aliquam dis leo pellentesque aliquet orci arcu. Maecenas lobortis proin commodo quis magna arcu senectus non tincidunt. A nisl netus pellentesque a consequat lacus et. Purus felis semper consequat lectus orci, sed. Quis elit ac sagittis ipsum purus mauris duis tincidunt in. At luctus volutpat nisl, dignissim egestas.
                </Text>
            </AboutText>

            <Image></Image>
        </>
    )
}


const AboutText = styled.div`

`