import style from "./Post.module.css";
import { Comment } from "./Comment.js";
import { Avatar } from "./Avatar.js";
import { format, formatDistanceToNow, set } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState, FormEvent, ChangeEvent, InvalidEvent } from "react";

export interface Author{
  name: string;
  avatarUrl: string;
  role: string;
}

export interface Content{
  type: 'text' | 'link';
  value: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];

}

export function Post({ author, publishedAt, content }: PostProps) {
  const publishedDateFormated = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR },
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [comments, setComments] = useState(["Post muito bancana!!!"]);
  const [newComment, setNewComment] = useState("");

  function handleCreateNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewComment(event.target.value);
  }

  function handleCommentSubmit(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  }
  function deleteComment(commentToDelete:string) {
    const commentsWithoutDeleted = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeleted);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("O comentário não pode estar vazio");
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
            return <p key={line.value}>{line.value}</p>;
          }
          if (line.type === "link") {
            return (
              <p key={line.value}>
                <a href=""> {line.value}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCommentSubmit} className={style.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onChange={handleCreateNewComment}
          placeholder="Deixe seu comentário"
          value={newComment}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
