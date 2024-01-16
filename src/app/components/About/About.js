import styles from './About.module.css'

export default function HomePage() {
    return (
        <main className={styles.about}>
            <div className={styles.leftBox}>
                <hr className={styles.line}></hr>
                <div className={styles.leftText}>About</div>
                <div className={styles.leftText}>Me</div>
                <hr className={styles.line}></hr>
            </div>
            <div className={styles.rightBox}>
                <div className={styles.rightText}>
                When you scroll down his homepage, an animation brings up chat bubbles with comments and questions related to the content manager title. 
                As you continue to scroll, Thomas highlights his talents as a content manager as well as high-quality examples of his work.
                When you scroll down his homepage, an animation brings up chat bubbles with comments and questions related to the content manager title. 
                As you continue to scroll, Thomas highlights his talents as a content manager as well as high-quality examples of his work.
                </div>
            </div>
        </main>

            )
}

