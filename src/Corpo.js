// Página do body com os stories, posts e a sidebar

import Stories from "./Stories";
import Sidebar from "./Sidebar";
import Posts from "./Posts";

function Corpo() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />

        <Posts />
      </div>
      <Sidebar />
    </div>
  );
}

export default Corpo;
