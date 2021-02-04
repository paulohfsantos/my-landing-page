import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background-color: #333;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: .5rem calc((100vw - 1000px) / 2);
    z-index: 10;
    /*position: fixed;
    width: 100%; */
    
    @media screen and (max-width: 768px){
        display: flex;
        z-index: 100;
        background-color: #333;
        flex-flow: wrap;
    }
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color: #15cdfc;
    }

    @media screen and (max-width: 768px){
        display: flex;
        padding: 1rem;
        margin: 0 auto;
        color: #fff;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavMenuMobile = styled.div`
    @media screen and (min-width: 768px){
        display: none;
    }
    @media screen and (max-width: 768px){
        z-index: 101;
        background-color: #333;
        display: flex;
        width: 100%;
        flex-direction: column;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background-color: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`
