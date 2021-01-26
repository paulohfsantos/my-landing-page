import React from 'react'
import '../Style/Projects.css'
import {Col12, Row, Container} from '../Components/ColElements'
import Cards from '../Components/Cards'
// import {Link} from 'react-router-dom'
import ImgComp from '../Components/ImgComp'
import {FaClock} from 'react-icons/fa'
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
        title: 'Projeto 3 - Contact List',
        subtitle: 'A Simple contact list made with Vue.js',
    }
    // {
    //     image: <ImgComp src={img1} />,
    //     title: 'Card Title 1',
    //     subtitle: 'This is a Subtitle',
    // }
    // {
    //     image: <ImgComp src={img2} />,
    //     title: 'Card Title 2',
    //     subtitle: 'This is a Subtitle',
    // },
    // {
    //     image: <ImgComp src={img3} />,
    //     title: 'Card Title 3',
    //     subtitle: 'This is a Subtitle',
    // },
    // {
    //     image: <ImgComp src={img3} />,
    //     title: 'Card Title 3',
    //     subtitle: 'This is a Subtitle',
    // },
    // {
    //     image: <ImgComp src={img1} />,
    //     title: 'Card Title 1',
    //     subtitle: 'This is a Subtitle',
    // },
    // {
    //     image: <ImgComp src={img2} />,
    //     title: 'Card Title 2',
    //     subtitle: 'This is a Subtitle',
    // },
    // {
    //     image: <ImgComp src={img3} />,
    //     title: 'Card Title 3',
    //     subtitle: 'This is a Subtitle',
    // }
]

const Projects = () => {
    return (
        <div className="projects">
            <Row>
                <Col12>
                    <h1>Projects</h1>
                </Col12>
            </Row>
            <Container className="container">
                <Row>
                    <Col12 className="centered padding-2">
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
                        <div style={{marginTop: '2em'}}>
                            <p style={{textAlign: 'center'}}>
                                <FaClock />
                            </p>
                            <p style={{textAlign: 'center'}}>More projects soon...</p>
                        </div>
                    </Col12>
                    {/* <Col12>
                        <div>
                            <p style={{textAlign: 'center'}}>
                                <FaClock />
                            </p>
                            <p style={{textAlign: 'center'}}>Soon more projects...</p>
                        </div>
                    </Col12> */}
                </Row>
            </Container>
        </div>
    )
}

export default Projects