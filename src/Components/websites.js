function Websites(props) {
  return (
    <a
      style={{
        textDecoration:'none',
        color:'#88C0D0',
        fontWeight:'bold',
        paddingBottom:'4px',
      }}
      href={props.link}>
      {props.name}
    </a>
  );
}

export default Websites;
