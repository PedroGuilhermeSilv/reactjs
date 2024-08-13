import style from "./Post.module.css";
import { Comment } from "./Comment.jsx";
import { Avatar } from "./Avatar.jsx";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

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

      <form className={style.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
