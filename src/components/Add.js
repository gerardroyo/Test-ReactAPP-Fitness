import React from 'react'
import './styles/Card.css'
import { Link } from 'react-router-dom'

const Add = ({img}) => (
    <Link to="/exercise/new">
        <img src={img} className="Fitness-Add" />
    </Link>
)
/*function Add(props) {
    return (
        <Link to="/exercise/new">
            <img src={props.img} className="Fitness-Add" />
        </Link>
    )
}*/

export default Add