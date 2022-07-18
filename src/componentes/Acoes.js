import React from "react";

function Acoes(Props) {
  function changeIcon() {
    if (Props.iconName === "heart-outline") {
      Props.setIconName("heart");
      Props.setIconClass("heart-color md hydrated");
    }
    if (Props.iconName === "heart") {
      Props.setIconName("heart-outline");
      Props.setIconClass(" md hydrated");
    }
  }

  return (
    <div class="acoes">
      <div>
        <ion-icon
          name={Props.iconName}
          class={Props.iconClass}
          onClick={changeIcon}
        ></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>
  );
}

export default Acoes;
