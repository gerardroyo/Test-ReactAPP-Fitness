import React from 'react'
import Card from './Card'

const ExerciseList = ({exercises}) => (
    <div>
        { exercises.map((exercise) => {
            return (
                <Card
                    key={exercise.Exercisesid}
                    title={exercise.Title}
                    description={exercise.Description}
                    img={exercise.Img}
                    leftColor={exercise.LeftColor}
                    rightColor={exercise.RightColor}
                />
            )   
        })}
    </div>
)
/*function ExerciseList(props) {
    return (
        <div>
            { props.exercises.map((exercise) => {
                return (
                    <Card
                        title={exercise.title}
                        description={exercise.description}
                        img={exercise.img}
                        leftColor={exercise.leftColor}
                        rightColor={exercise.rightColor}
                    />
                )
            })}
        </div>
    )
}*/

export default ExerciseList