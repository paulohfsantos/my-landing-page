import React from 'react'
import '../Style/Cards.css'

 function Cards(props) {
    return (
        <li>
            <div className="card">
                <div className="card-container">
                    <div>
                        <div className="card-title">
                            {props.image}
                        </div>
                        <div className="card-title">
                            {props.title}
                        </div>
                        <div className="card-subtitle">
                            <p>{props.subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Cards