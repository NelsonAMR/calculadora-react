import '../css/Button.css'

function Button(props) {
  const operator = ['/', '%', '*', '-', '+', '( )'];
  const erase = ['D', 'C'];
  const result = '=';
    // const isOperator = value => isNaN(value) && (value != '.') && (value != '=');

  if(operator.includes(props.children)){
    return (
      <div
          className='button operator'
          onClick={() => props.handleClick(props.children)}
      >
          {props.children}
      </div>
    )
  }else if(erase.includes(props.children)){
    return (
      <div
          className='button erase'
          onClick={() => props.handleClick(props.children)}
      >
          {props.children}
      </div>
    )
  }else if(result == props.children){
    return (
      <div
          className='button result'
          onClick={() => props.handleClick(props.children)}
      >
          {props.children}
      </div>
    )
  }else{
    return (
      <div
          className='button'
          onClick={() => props.handleClick(props.children)}
      >
          {props.children}
      </div>
    )
  }
}

export default Button