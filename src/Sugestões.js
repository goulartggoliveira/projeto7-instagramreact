// Sugestões

let sugestDescrip = [
  {
    img: "assets/img/bad.vibes.memes.svg",
    name: "bad.vibes.memes",
  },
  {
    img: "assets/img/chibirdart.svg",
    name: "chibirdart",
  },
  {
    img: "assets/img/razoesparaacreditar.svg",
    name: "razoesparaacreditar",
  },
  {
    img: "assets/img/adorable_animals.svg",
    name: "adorable_animals",
  },
  {
    img: "assets/img/smallcutecats.svg",
    name: "smallcutecats",
  },
];

let sugests = sugestDescrip.map((sug) => (
  <div class="sugestao">
    <div class="usuario">
      <img src={sug.img} />
      <div class="texto">
        <div class="nome">{sug.name}</div>
        <div class="razao">Segue você</div>
      </div>
    </div>

    <div class="seguir">Seguir</div>
  </div>
));

function Sugestoes() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugests}
    </div>
  );
}

export default Sugestoes;
