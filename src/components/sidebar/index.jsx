import styles from "./sidebar.module.css";
import EventCard from "../eventCard/index.jsx"; 
import TagCloud from "../tagCloud";

const Sidebar = ({upcomingEvents, premiumFeatures, popularTags}) => {
  return (
    <aside className={styles.sidebar}>
    <div className={styles.sidebarSection}>
      <h3 className={styles.sidebarTitle}>Eventos Próximos</h3>
      {upcomingEvents.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
    </div>

    <div className={styles.sidebarSection}>
      <h3 className={styles.sidebarTitle}>MemeVerse Premium</h3>
      <div className={styles.premiumCard}>
        <h4 className={styles.premiumTitle}>
          Desbloqueie recursos exclusivos!
        </h4>
        <ul className={styles.premiumFeatures}>
          {premiumFeatures.map((feature, index) => (
            <li key={index} className={styles.premiumFeature}>
              {feature}
            </li>
          ))}
        </ul>
        <button className={styles.premiumButton}>
          Experimentar Grátis
        </button>
      </div>
    </div>
    <TagCloud popularTags={popularTags} />
  </aside>
  );
};

export default Sidebar;
