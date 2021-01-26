import React from 'react'
import '../Style/Cards.css'

 function Cards(props) {
    return (
        <li>
            <div className="card">
                <div className="card-container">
                    <div className="info-group-card">
                        <div className="card-image">
                            {props.image}
                        </div>
                        <div>
                            <div className="card-title">
                                {props.title}
                            </div>
                            <div className="card-subtitle">
                                <p>{props.subtitle}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Cards