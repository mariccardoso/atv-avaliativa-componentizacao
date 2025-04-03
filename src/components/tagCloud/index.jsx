import styles from "./tagCloud.module.css";

const TagCloud = () => {
  return (
    <div className={styles.sidebarSection}>
      <h3 className={styles.sidebarTitle}>Tags Populares</h3>
      <div className={styles.tagCloud}>
        <span className={`${styles.tag} ${styles.tagLarge}`}>
          #memeday
        </span>
        <span className={styles.tag}>#programação</span>
        <span className={`${styles.tag} ${styles.tagMedium}`}>
          #humor
        </span>
        <span className={styles.tag}>#escola</span>
        <span className={`${styles.tag} ${styles.tagLarge}`}>
          #trabalhoremoto
        </span>
        <span className={styles.tag}>#segundafeira</span>
        <span className={`${styles.tag} ${styles.tagMedium}`}>
          #games
        </span>
        <span className={styles.tag}>#nofilter</span>
      </div>
    </div>
  );
};

export default TagCloud;
