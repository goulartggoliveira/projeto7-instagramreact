function Usuario(props) {
  return (
    <div class="usuario">
      <img src={props.img} alt="" />
      <div class="texto">
        <strong>{props.name}</strong>
        {props.nick}
      </div>
    </div>
  );
}

export default Usuario;
