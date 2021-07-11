import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
        display: flex;
        flex-direction: column;
        width: 23rem;
        height: 8rem;
        border: 2px solid grey;
        border-radius: 15px;
        margin: 5px 0;
        font-size: 20px;
        padding: 10px;
    `

const Info = styled.div`
        display: flex;
        justify-content: space-between;
        margin: 0px;
    `

const Name = styled.h2`
        margin: 5px;
        border-bottom: 1px solid gray;
    `

const MemberCard = props => {
    const {member} = props;
    
    return(
        <Card key={member.name}>
            <Name>{member.name}</Name>
            <Info><p>Role: {member.role}</p><p>Email: {member.email}</p></Info>
        </Card>
    )
}

export default MemberCard