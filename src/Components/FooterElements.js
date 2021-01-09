import styled from 'styled-components'
// import { FooterLink as Link } from 'react-router-dom'

export const MainFooter = styled.footer`
    height: 50px;
    background-color: #333;
    display: flex;
    align-items: center;
`

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1170px;

    @media screen and (max-width: 768px){
        max-width: 720px;
    }
    @media screen and (max-width: 576px){
        max-width: 540px;
    }
    @media screen and (max-width: 576px){
        max-width: 100%;
    }
`

export const FooterName = styled.span`
    text-align: center;
    color: #fff;
    font-size: 20px;
`