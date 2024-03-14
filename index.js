const element = (
  <div className='bg-container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='card-container'>
      <img
        className='images'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
      />
      <h1 className='heading2'>Kiran V</h1>
      <p className='description'>
        Vishnu Institute of Computer Education and Technology Bhimavaram
      </p>
      <img
        className='images'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
