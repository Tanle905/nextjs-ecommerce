import styles from './NotFound.module.css'

export default function NotFound () {
  return (
    <>
      <section className={styles['error-container']}>
        <span className={styles.four}>
          <span className={styles['screen-reader-text']}>4</span>
        </span>
        <span className={styles.zero}>
          <span className={styles['screen-reader-text']}>0</span>
        </span>
        <span className={styles.four}>
          <span className={styles['screen-reader-text']}>4</span>
        </span>
      </section>
      <div className={styles['link-container']}>
      </div>
    </>
  );
}
