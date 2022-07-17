import Acoes from "./Acoes";

//Objetos dos posts
let postsDescrip = [
  {
    img: "assets/img/meowed.svg",
    name: "meowed",
    post: "assets/img/gato-telefone.svg",
    likeimg: "assets/img/respondeai.svg",
    userlike: "respondeai",
    likes: "101.523",
  },
  {
    img: "assets/img/barked.svg",
    name: "barked",
    post: "assets/img/dog.svg",
    likeimg: "assets/img/adorable_animals.svg",
    userlike: "adorable_animals",
    likes: "99.159",
  },
];

let createPost = postsDescrip.map((post) => (
  <div class="post">
    <div class="topo">
      <div class="usuario">
        <img src={post.img} />
        {post.name}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div class="conteudo">
      <img src={post.post} />
    </div>

    <div class="fundo">
      <Acoes />

      <div class="curtidas">
        <img src={post.likeimg} />
        <div class="texto">
          Curtido por <strong>{post.userlike}</strong> e
          <strong>outras {post.likes} pessoas</strong>
        </div>
      </div>
    </div>
  </div>
));

function Posts() {
  return <div class="posts">{createPost}</div>;
}
export default Posts;
