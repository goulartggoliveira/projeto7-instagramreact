// Pagina dos stories

let storiesDescrip = [
  { name: "9gag", img: "assets/img/9gag.svg" },
  { name: "meowed", img: "assets/img/meowed.svg" },
  { name: "barked", img: "assets/img/barked.svg" },
  {
    name: "nathanwpylestrangeplanet",
    img: "assets/img/nathanwpylestrangeplanet.svg",
  },
  { name: "wawawicomics", img: "assets/img/wawawicomics.svg" },
  { name: "respondeai", img: "assets/img/respondeai.svg" },
  { name: "filomoderna", img: "assets/img/filomoderna.svg" },
  { name: "memeriagourmet", img: "assets/img/memeriagourmet.svg" },
];

let stories = storiesDescrip.map((story) => (
  <div class="story">
    <div class="imagem">
      <img src={story.img} />
    </div>
    <div class="usuario">{story.name}</div>
  </div>
));

function Stories() {
  return (
    <div class="stories">
      {stories}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

export default Stories;
