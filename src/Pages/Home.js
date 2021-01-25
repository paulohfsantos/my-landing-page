import React from 'react'
import Slider from '../Components/Slider'
import {Col12, Col6, Row, Container} from '../Components/ColElements'
import Cards from '../Components/Cards'
import {Link} from 'react-router-dom'
import '../Style/Home.css'
import ImgComp from '../Components/ImgComp'
import Exp from '../Components/Exp'
import img1 from '../Pics/Commpre.png'
import img2 from '../Pics/Site.png'
import img3 from '../Pics/Contact-List.png'

let data = [
    {
        image: <ImgComp src={img1} />,
        title: 'Projeto 1 - Commpre',
        subtitle: 'Simple website ecommerce template using HTML5, CSS3 and Javascript',
    },
    {
        image: <ImgComp src={img2} />,
        title: 'Projeto 2 - Personal Website',
        subtitle: 'My own website with React.js',
    },
    {
        image: <ImgComp src={img3} />,
        title: 'Projeto 1 - Contact List',
        subtitle: 'A Simple contact list with Vue.js',
    },
    {
        image: <ImgComp src={img1} />,
        title: 'Projeto 1 - Commpre',
        subtitle: 'Simple website ecommerce template using HTML5, CSS3 and Javascript',
    }
]

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

const Home = () => {
    return (
        <div className="home">
            <Slider />
            <Container>
                <Row>
                    <Col12>
                        <h2>Projects</h2>
                    </Col12>
                    <Col12>
                        <div>
                            <h3>Check out my works!</h3>
                        </div>
                    </Col12>
                    <Col12>
                        <Row>
                            <Col6 className="centered padding-2">
                                <ul className="card-list">
                                    {
                                        data.map((data, index)=>{
                                            return(
                                                <Cards key={index}
                                                    image={data.image}
                                                    title={data.title}
                                                    subtitle={data.subtitle}
                                                />
                                            )
                                        })
                                    }
                                </ul>
                            </Col6>
                            <Col12 className="flex justify-center">
                                <Link className="link-proj" to="/Projects">See All</Link>
                            </Col12>
                        </Row>
                    </Col12>
                    <Col12>
                        <h2>Experience</h2>
                    </Col12>
                    <Col12>
                        <Row>
                            <Col6 className="m-auto">
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
                            </Col6>
                            <Col12 className="flex justify-center padding-2">
                                <Link className="link-proj" to="/Experience">See All</Link>
                            </Col12>
                        </Row>
                    </Col12>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Home
    