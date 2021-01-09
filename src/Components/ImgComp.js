import React from 'react'

const ImgComp = ({ src }) => {
    let imgStyle = {
        width: 100 + "%",
        height: "auto"
    }
    return (
        <>
            <img src={src} alt="slide-img" style={imgStyle} />
        </>
        
    )
}

export default ImgComp