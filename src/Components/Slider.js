import React, {useState} from 'react'
import '../Style/Slider.css'
import ImgComp from './ImgComp'
import {FaAngleLeft} from 'react-icons/fa'
import {FaAngleRight} from 'react-icons/fa'
import i1 from '../Pics/1.jpg'
import i2 from '../Pics/2.jpg'
import i3 from '../Pics/3.jpg'

const Slider = () => {

    let sliderArr = [
        <ImgComp src={i1} />,
        <ImgComp src={i2} />,
        <ImgComp src={i3} />
    ]
        
    const [x, setX] = useState(0)
    
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length-1)) : setX(x + 100)
    }
    const goRight = () => {
        x === -100*(sliderArr.length-1) ? setX(0) : setX(x - 100)
    }

    return (
        <div className="slider">
            <span>Check out my works</span>
            {
                sliderArr.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }
            <button id="goLeft" onClick={goLeft}>
                <FaAngleLeft />
            </button>
            <button id="goRight" onClick={goRight}>
                <FaAngleRight />
            </button>
        </div>
    )
}

export default Slider
