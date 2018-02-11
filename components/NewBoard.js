export default ( { addNewBoard} ) => (
  <div className='new-board-card' onClick={addNewBoard}>
    <span>+</span>
    <p>Create a new board</p>
    <style jsx>{`
      .new-board-card {
        align-items: center;
        border: 2px var(--light-orange) solid;
        border-radius: 5%;
        color: var(--light-orange);
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 2.0rem;
        font-family: var(--semibold);
        min-height: 30.0rem;
        margin-right: 4.0rem;
        padding: 2.0rem;
        width: 30.0rem;
        -webkit-box-shadow: 7px 10px 37px -9px rgba(145,145,145,0.69);
        -moz-box-shadow: 7px 10px 37px -9px rgba(145,145,145,0.69);
        box-shadow: 7px 10px 37px -9px rgba(145,145,145,0.69);
      }
      span {
        font-size: 4.0rem;
      }
      .new-board-card:hover {
        font-family: var(--bold);
        cursor: pointer;
      }
    `}</style>
  </div>
)