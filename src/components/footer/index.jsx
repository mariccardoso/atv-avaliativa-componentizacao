import styles from "./footer.module.css";

const Footer = ({footerData, socialLinks}) => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <h2>MemeVerse</h2>
            <p>O universo dos melhores memes da internet.</p>
          </div>

          <div className={styles.footerNavContainer}>
              {footerData.map((section) => (
                <div key={section.titulo} className={styles.footerNavSection}>
                  <h3 className={styles.footerNavSectionTitle}>{section.titulo}</h3>
                  <nav className={styles.footerNav}>
                    {section.links.map((link) => (
                      <a key={link} href="#">
                        {link}
                      </a>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2025 MemeVerse - Todos os direitos reservados</p>
          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <a key={link.id} href={link.url} className={styles.socialLink}>
                <span>{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
    </footer>
  );
};

export default Footer;
