import React from 'react'
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import Add from '../components/Add'
import AddImg from '../images/add.png'

class Exercises extends React.Component {
  state = {
          data: []
      }
    
  
  async componentDidMount () {
    await this.fetchExercises()
  }

  fetchExercises = async () => {
    // https://fitnessappi.herokuapp.com/api/exercises
    let res = await fetch('http://localhost:5000/api')
    let data = await res.json()

    this.setState({
      data
    })
    console.log(data)
  }
  
  render () {
      return (
              <div>
                <div>
                  <Welcome 
                      userName="Gerard"
                  />
                  <ExerciseList 
                      exercises={this.state.data}
                /></div>
                  <Add 
                      img={AddImg}
                  />
              </div>
      )
  }

}

export default Exercises