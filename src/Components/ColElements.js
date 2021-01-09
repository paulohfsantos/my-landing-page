import styled from 'styled-components'

export const Col12 = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0 1rem;
`
export const Col6 = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 1rem;

    @media screen and (max-width: 768px){
        flex: 0 0 100%;
        max-width: 100%;
        padding: 0 1rem;
    }
`
export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
`