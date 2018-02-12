import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVisibility: false,
      inputValue: ''
    }
  }

  changeVisibility = () => {
    this.setState({ inputVisibility: !this.state.inputVisibility })
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  submitTask = () => {
    this.props.addTask(this.props.title, this.state.inputValue)
    this.setState({
      inputVisibility: false,
      inputValue: ''
    })
  }

  removeTask = (i) => () => {
    this.props.removeTask(this.props.title, this.props.tasks[i])
  }

  render() {
    return (
      <div className='board-card'>
          {this.props.title &&
            <p className='board-card-title'>{this.props.title}</p>
          }
          <ul>
            {this.props.tasks && this.props.tasks.map((t,i)=> 
              <div className='item-container' key={i}>
                <li key={i}>
                  {t}
                </li>
                <button onClick={this.removeTask(i)}>
                  <span>ｘ</span>
                </button>
              </div>
            )}
          </ul>
        {!this.state.inputVisibility &&
          <div className='add-task-container'>
            <a className='add-task' onClick={this.changeVisibility}>
              <span>+ Add task</span>
            </a>
          </div>
        }
        { this.state.inputVisibility &&
        <div className='input-container'>
          <input type='text' value={this.state.inputValue} onChange={this.handleChange}/>
          <button className='send-task' onClick={this.submitTask}>
            <span>+</span>
          </button>
        </div>
        }
        <style jsx>{`
          .board-card {
            background: var(--white);
            border-radius: 5%;
            color: var(--dark-grey);
            font-size: 1.6rem;
            min-height: 30.0rem;
            margin-right: 4.0rem;
            margin-bottom: 4.0rem;
            padding: 2.0rem;
            position: relative;
            width: 30.0rem;
            -webkit-box-shadow: 7px 10px 37px -9px rgba(145,145,145,0.69);
            -moz-box-shadow: 7px 10px 37px -9px rgba(145,145,145,0.69);
            box-shadow: 7px 10px 37px -9px rgba(145,145,145,0.69);
          }
          .board-card-title {
            font-size: 1.8rem;
            text-decoration: underline;
            text-decoration-color: var(--light-orange);
          }
          .add-task-container {
            display: flex;
            justify-content: center;
          }
          .add-task {
            color: var(--light-orange);
            font-family: var(--semibold);
            cursor: pointer;
          }
          .input-container {
            display: flex;
            justify-content: center;
          }
          .input-container input {
            border: 1px var(--light-orange) solid;
            border-radius: 10rem 0 0 10rem;
            box-shadow: none;
          }
          .input-container button {
            background-color: var(--dark-orange);
            border: none;
            border-radius: 0 10rem 10rem 0;
            color: var(--white);
            cursor: pointer;
            padding: 2px 6px;
          }
          li {
            cursor: pointer;
          }
          .item-container {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
          }
          .item-container button {
            background-color: var(--light-orange);
            border: none;
            border-radius: 100%;
            color: var(--white);
            cursor: pointer;
            padding: 1px 4px;
          }
        `}</style>
    </div>
    )
  }
}
