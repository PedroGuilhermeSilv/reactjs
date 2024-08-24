import { ThumbsUp, Trash } from "@phosphor-icons/react";
import style from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}


export function Comment({ content, onDeleteComment }: CommentProps) {
  const [like, setLike] = useState(0);
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLike((state) => {
      return state + 1;
    });
  }
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

            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span> {like}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
