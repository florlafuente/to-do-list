import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVisibility: false
    }
  }

  changeVisibility = () => {
    this.setState({
      inputVisibility: true
    })
  }

  render() {
    return (
      <div className='board-card' onClick={this.changeVisibility}>
        {this.props.title &&
          <p className='board-card-title'>{this.props.title}</p>
        }
        <ul>
        {this.props.tasks && this.props.tasks.map((t,i)=> 
          <li key={i}>
            {t}
          </li>
        )}
        </ul>
        <div className={ this.state.inputVisibility ? 'visible' : 'not-visible'}>
          <input type='text' />
          <button className='send-task'>
            <span>+</span>
          </button>
        </div>
        <style jsx>{`
          .board-card {
            background: var(--white);
            border-radius: 5%;
            color: var(--dark-grey);
            font-size: 1.6rem;
            min-height: 30.0rem;
            margin-right: 4.0rem;
            padding: 2.0rem;
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
          .not-visible {
            display: none;
          }
          .visible {
            display: block;
          }
        `}</style>
    </div>
    )
  }
}
