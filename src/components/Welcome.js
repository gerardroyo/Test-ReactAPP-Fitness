import React from 'react'
import './styles/Welcome.css'

const Welcome = ({userName}) => (
    <div className="container">
        <div className="Fitness-User-Info">
            <h1>Hello {userName}!</h1>
            <p>Let's workout to get some gains!</p>
        </div>
    </div>
)
/*function Welcome (props) {
    return (
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.userName}!</h1>
                <p>Let's workout to get some gains!</p>
            </div>
        </div>
    )
}*/

export default Welcome