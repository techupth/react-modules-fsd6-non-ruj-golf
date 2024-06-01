function Button(props) {
  return <button className={props.buttonStyle}>{props.buttonText}</button>;
}

Button.defaultProps = {
  buttonText: "Add to Cart",
  buttonStyle: "add-to-cart-button",
};

export default Button;
