import React from 'react'
import Board from './Board'
import NewBoard from '../components/NewBoard'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      'home': ['Buy milk', 'Wash clothes', 'Clean the fridge'],
      'school': ['Do homework', 'Study']
    }
    this.addNewBoard = this.addNewBoard.bind(this)
  }

  addNewBoard = () =>  {
    const newBoard = {}
    this.setState({
      'title': []
    })
  }

  addTask = (board, task) => {
    this.setState({
      [board]: this.state[board].concat(task)
    })
  }

  removeTask = (board, task) => {
    const index = this.state[board].indexOf(task)
    const tasks = this.state[board].slice()
    tasks.splice(index,1)
    this.setState({
      [board]: tasks
    })
  }

  render() {
    return (
      <div className='board-grid'>
        <h1>To do list</h1>
        <div className='board-container'>
          {Object.keys(this.state).map((k,i)=> 
            <Board key={i} title={k} tasks={this.state[k]} addTask={this.addTask} removeTask={this.removeTask} />
          )}
          <NewBoard addNewBoard={this.addNewBoard}/>
        </div>
        <style jsx>{`
          .board-grid {
            margin: 40px 30px;
          }
          .board-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
            margin-top: 40px;
          }
        `}</style>
      </div>
    )
  }
}

