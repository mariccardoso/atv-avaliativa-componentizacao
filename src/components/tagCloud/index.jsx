import styles from "./tagCloud.module.css";

const TagCloud = ({popularTags}) => {
  return (
    <div className={styles.sidebarSection}>
      <h3 className={styles.sidebarTitle}>Tags Populares</h3>
      <div className={styles.tagCloud}>
        {popularTags.map((tag) => (
          <span key={tag.id} className={styles.tag}>
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagCloud;
