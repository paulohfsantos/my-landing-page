import React from 'react'
import '../Style/About.css'
import Pic from '../Pics/me-rounded.png'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Col12, Col6, Row, Container} from '../Components/ColElements'

const Html = styled.span`
    color: #e73538;
`
const Css = styled.span`
    color: #3899d4;
`
const Js = styled.span`
    color: #f5d45e;
`
const Rct = styled.span`
    color: #40e0d0;
`
const Vue = styled.span`
    color: #0fb471;
`
const Node = styled.span`
    display: none;
    color: #227744;
`


const About = () => {
    return (
        <div className="about">
            <Row>
                <Col12>
                    <h1>About</h1>
                </Col12>
            </Row>
            <Container>
                <Row className="row">
                    <Col6>
                        <figure>
                            <img src={Pic} alt="profile-pic" />
                        </figure>
                    </Col6>
                    <Col6 className="flex align-items-center">
                        <div className="text-box">
                            <p>
                                Paulo Santos, brazilian, 25 years old. Actually frontend Developer with 1 year experience.
                                My techs are <Html>HTML 5</Html>, <Css>CSS 3</Css>, <Js>JavaScript</Js>, <Rct>React</Rct> and <Vue>Vue</Vue> <Node>Node.js</Node>
                            </p>
                            <p>
                                Please <Link to="/Contact" className="link">Contact</Link> me for more info
                            </p>
                        </div>
                    </Col6>
                </Row>
            </Container>
        </div>
    )
}

export default About
    