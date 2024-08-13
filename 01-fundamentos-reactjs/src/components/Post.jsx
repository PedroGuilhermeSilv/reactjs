import style from './Post.module.css'; 


export function Post(){
    return (
    <article  className={style.post}>
        <header>
            <div className={style.author}>
            <img className={style.avatar} src="https://github.com/PedroGuilhermeSilv.png" alt="" />
            <div  className={style.authorInfo}>
                <strong> Pedro Guilherme</strong>
                <span>FullStack Developer</span>
            </div>
            </div>

            <time dateTime="2024-05-11">Publicado há 1h</time>


        </header>
            <div className={style.content}>
            <p>Fala galera👋</p>
            <p>Acabi  de subir mais um projeto no meu portifolio</p>
            <p>👉{' '}<a href="">pedro.fullstack</a></p>
            <p><a href="">#novoprojeto</a> {' '}
             <a href="">#novoprojeto</a></p>

            </div>


            <form className={style.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe seu comentário' />
            <footer>
                <button type='submit'>Publicar</button>

            </footer>
            </form>

    </article>
    )
};

