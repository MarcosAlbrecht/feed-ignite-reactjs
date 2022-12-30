//props: { author: string, content: string}
import { ArticleNyTimes } from 'phosphor-react';
import styles from './Post.module.css';
export function Post(props){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/31410871?v=" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Marcos Albrecht</strong>
                        <span>Developer</span>
                    </div>
                </div>

                <time title="29 de dezembro às 14:20h" dateTime="2022-12-29 14:20:00">Publicado há 1h</time>
            </header>

            <div className={styles.content} >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <p><a href="#">marcos.design.</a></p> 
                    <p><a href="#">#novoprojeto</a>{' '}
                        <a href="#">#nlw</a>{' '}
                        <a href="#">#rocketseat</a>{' '}
                    </p>
                
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário'/>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
        </article>
    )
}
