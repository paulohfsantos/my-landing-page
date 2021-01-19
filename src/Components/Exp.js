import React from 'react'
import '../Style/Experience.css'

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

// terminar de percorrer esse obj de array dentro do array

console.log(expData.activities)

const Exp = (props) => {
    return (
        <li style={{listStyle:'none'}}>
            <div className="exp-card">
                <div className="exp-card-name">
                    <h3>{props.title}</h3>
                    <small><strong>{props.from} - {props.now}</strong></small>
                </div>
                <div className="exp-card-desc">
                    <div className="exp-card-comp">
                        <h3>{props.company}</h3>
                    </div>
                    <ul>
                        {
                            props.activities.map((data, index)=>{
                                return(
                                    <li key={index}>{data.act}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </li>
    )
}

export default Exp