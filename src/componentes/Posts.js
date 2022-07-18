import Acoes from "./Acoes";
import React from "react";

//Objetos dos posts

function Posts() {
  const [iconName, setIconName] = React.useState("heart-outline");
  const [iconClass, setIconClass] = React.useState(" md hydrated");

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
        <img src={post.post} onClick={changeIcon} />
      </div>

      <div class="fundo">
        <Acoes
          iconClass={iconClass}
          iconName={iconName}
          setIconClass={setIconClass}
          setIconName={setIconName}
        />

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

  function changeIcon() {
    if (iconName === "heart-outline") {
      setIconName("heart");
      setIconClass("heart-color md hydrated");
    }
  }

  return <div class="posts">{createPost}</div>;
}
export default Posts;
