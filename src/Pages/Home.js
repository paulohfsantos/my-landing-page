import React from 'react'
import Slider from '../Components/Slider'
import {Col12, Col6, Row, Container} from '../Components/ColElements'
import Cards from '../Components/Cards'
import {Link} from 'react-router-dom'
import '../Style/Home.css'
import ImgComp from '../Components/ImgComp'
import img1 from '../Pics/car.jpg'
import img2 from '../Pics/code.png'
import img3 from '../Pics/car.jpg'

let data = [
    {
        image: <ImgComp src={img1} />,
        title: 'Card Title 1',
        subtitle: 'This is a Subtitle',
    },
    {
        image: <ImgComp src={img2} />,
        title: 'Card Title 2',
        subtitle: 'This is a Subtitle',
    },
    {
        image: <ImgComp src={img3} />,
        title: 'Card Title 3',
        subtitle: 'This is a Subtitle',
    },
    {
        image: <ImgComp src={img1} />,
        title: 'Card Title 1',
        subtitle: 'This is a Subtitle',
    },
    {
        image: <ImgComp src={img2} />,
        title: 'Card Title 2',
        subtitle: 'This is a Subtitle',
    },
    {
        image: <ImgComp src={img3} />,
        title: 'Card Title 3',
        subtitle: 'This is a Subtitle',
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
                        <h2>Extras</h2>
                    </Col12>
                    <Col12>
                        <div>
                            <h3>Future Content</h3>
                        </div>
                    </Col12>
                </Row>
            </Container>
        </div>
    )
}

export default Home
    