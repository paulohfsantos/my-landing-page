import React from 'react'
import { Col12, Container, Row } from '../Components/ColElements'
import '../Style/Experience.css'
import Exp from '../Components/Exp'
//import styled from 'styled-components'

let expData = [
    {
        title: 'Front-End Developer',
        from: 'Mar 03, 2020',
        now: 'Present',
        company: 'Dohms Web',
        activities: [
            {act: 'Website Maintenance'},
            {act: 'Layout and Newsletter production'},
            {act: 'API consuming with jQuery Ajax'},
            {act: 'Website creation with HTML5, CSS3, Bootstrap 4, Javascript/jQuery and Vue.js using ASP.NET MVC'}
        ]
    },
    {
        title: 'Web Designer',
        from: 'Aug 10, 2019',
        now: 'Sep 15, 2019',
        company: '4.One',
        activities: [
            {act: 'User Interface designing'},
            {act: 'Layout design with Elementor Pro'}
        ]
    },
    {
        title: 'Graphic Designer',
        from: 'Aug 05, 2015',
        now: 'Out 01, 2015',
        company: 'Think Soluções Digitais',
        activities: [
            {act: 'Presentation Portfolio to clients'},
            {act: 'Email Marketing Design'}
        ]
    }
]

const Experience = () => {
    return (
        <div className="exp">
            <Container>
                <Row>
                    <Col12>
                        <h1>Experience</h1>
                    </Col12>
                    <Col12>
                        <ul className="exp-box-home">
                            {
                                expData.map((data, index)=>{
                                    return(
                                        <Exp key={index}
                                            title={data.title}
                                            from={data.from}
                                            now={data.now}
                                            company={data.company}
                                            activities={data.activities}
                                        />
                                    )
                                })
                            }
                        </ul>
                    </Col12>
                </Row>
            </Container>
        </div>
    )
}

export default Experience