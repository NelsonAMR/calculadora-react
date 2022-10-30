import '../css/Screen.css';

function Screen({input}) {
  return (
    <div className='screen-container'>
      <div className="screen">
        {input}
      </div>
    </div>
  )
}

export default Screen