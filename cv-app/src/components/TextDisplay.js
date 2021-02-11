const TextDisplay = (props) => {
  return (
    <div className="tile">
      <div className="textDisplay">{props.children}</div>
    </div>
  );
};

export default TextDisplay;
