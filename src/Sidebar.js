// Página do sidebar
import Sugestoes from "./Sugestões";
import Usuario from "./Usuario";

function Sidebar() {
  return (
    <div class="sidebar">
      <Usuario
        name="Catana"
        nick="catanacomics"
        img="assets/img/catanacomics.svg"
      />

      <Sugestoes />

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}

export default Sidebar;
