import { ThumbsUp, Trash } from "@phosphor-icons/react";
import style from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={style.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/PedroGuilhermeSilv.png"
        alt=""
      />
      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Pedro Guilherme</strong>
              <time dateTime="2024-05-11">Cerca de 2 horas</time>
            </div>

            <button title="Deletar Comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏 👏 </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span> 20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
