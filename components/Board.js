export default ( {title, tasks }) => (
  <div className='board-card'>
    {title &&
      <p className='board-card-title'>{title}</p>
    }
    <ul>
    {tasks && tasks.map((t,i)=> 
      <li key={i}>
        {t}
      </li>
    )}
    </ul>
    <input type='text' />
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
      input {
        display: none;
      }
    `}</style>
  </div>
)