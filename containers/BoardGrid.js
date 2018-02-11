import React from 'react'
import Board from '../components/Board'
import NewBoard from '../components/NewBoard'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      'boards': [
        {
          'name': 'Home',
          'tasks': ['Buy milk', 'Wash clothes', 'Clean the fridge']
        }
      ]
    }
    this.addNewBoard = this.addNewBoard.bind(this)
  }

  addNewBoard = () =>  {
    const newBoard = {}
    this.setState({
      boards: this.state.boards.concat(newBoard)})
  }

  render() {
    return (
      <div className='board-grid'>
        <h1>To do list</h1>
        <div className='board-container'>
          {this.state.boards.map((b,i)=> 
            <Board key={i} title={b.name} tasks={b.tasks} />
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
            flex-wrap: no-wrap;
            justify-content: flex-start;
            margin-top: 40px;
          }
        `}</style>
      </div>
    )
  }
}

