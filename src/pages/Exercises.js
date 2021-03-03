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
    let res = await fetch('https://fitnessappi.herokuapp.com/api/exercises')
    let data = await res.json()

    this.setState({
      data
    })
    console.log(data)
  }
  
  render () {
      return (
              <div>
                  <Welcome 
                      userName="Gerard"
                  />
                  <ExerciseList 
                      exercises={this.state.data}
                  />
                  <Add 
                      img={AddImg}
                  />
              </div>
      )
  }

}

export default Exercises