
import styled from '@emotion/styled'
import Card from '@mui/material/Card/Card';

export const CardContainer = styled(Card)`
    margin: 1rem auto;
    max-width: 1000px;
    padding: 0;
    display: flex;

    @media screen and (max-width: 1040px) {
        margin: 1rem;
    }
`

export const Img = styled.img`
    flex: 0;
`

export const Information = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`

export const Title = styled.h2`
    align-self: center;
`

export const Description = styled.p`
    align-self: start;
    flex: 1;
`

export const Price = styled.span`
    align-self: end;
`
