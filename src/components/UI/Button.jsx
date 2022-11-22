function Button(props) {
  // props.children === tai kas irasyta tarp pradzios ir pabaigos tagu
  return <button className='btn'>{props.children}</button>;
}
export default Button;
