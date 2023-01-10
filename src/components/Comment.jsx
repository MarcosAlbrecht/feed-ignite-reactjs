import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://github.com/MarcosAlbrecht.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    
                    <header>
                        <div className={styles.authorAndTime} >
                            <strong>Marcos Albrecht</strong>
                            <time title="29 de dezembro às 14:20h" dateTime="2022-12-29 14:20:00">Cerca de 1h atrás </time>
                        </div>
                        <button title="Deletar comentário" >
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p> Muto bom Devon, parabéns</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp  />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}