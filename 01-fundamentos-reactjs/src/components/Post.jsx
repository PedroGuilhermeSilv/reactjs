import style from "./Post.module.css";
import { Comment } from "./Comment.jsx";
import { Avatar } from "./Avatar.jsx";
import { format, formatDistanceToNow, set } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const publishedDateFormated = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR },
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [comments, setComments] = useState([1, 2]);

  function handleCommentSubmit() {
    event.preventDefault();
    console.log("submit");
    setComments([...comments, comments.length + 1]);
  }
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={author.avatarUrl} alt="" />
          <div className={style.authorInfo}>
            <strong> {author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormated}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={style.content}>
        {content.map((line) => {
          if (line.type === "text") {
            return <p>{line.value}</p>;
          }
          if (line.type === "link") {
            return (
              <p>
                <a href=""> {line.value}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCommentSubmit} className={style.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        {comments.map((comment) => {
          return <Comment />;
        })}
      </div>
    </article>
  );
}
