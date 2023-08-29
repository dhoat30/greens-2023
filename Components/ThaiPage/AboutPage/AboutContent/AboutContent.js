import React from 'react'
import styled from 'styled-components'

import BuddhaPattern from '../../../UI/Pattern/buddhaPattern'
import RowTitle from '../../../UI/Titles/RowTitle'
import CardsContent from './CardsContent'
import TeamMembers from './TeamMembers'

function AboutContent(props) {
    return (
        <Container>
            <Slogan >
                <BuddhaPattern />
                <RowTitle color="var(--darkGrey)">{props.dataArray[0].introductionContent}</RowTitle>
            </Slogan>
            <CardsContent dataArray={props.dataArray} />
            <TeamMembers dataArray={props.dataArray} thaiChef={props.thaiChef} />
        </Container>
    )
}

const Container = styled.div`

`
const Slogan = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 100px 0;
`

export default AboutContent
