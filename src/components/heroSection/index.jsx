import styles from "./heroSection.module.css";

const HeroSection = () => {
    // Dados para o meme do dia (hero section)
    const memeOfTheDay = {
        id: 7,
        title: "Meme do Dia: Quando seu código funciona de primeira",
        description:
            "Este momento raro que todos os desenvolvedores sonham em experimentar!",
        image: "https://pt.quizur.com/_image?href=https://img.quizur.com/f/img5c22d768d51465.93685599.jpg?lastEdited=1545787246&w=600&h=600&f=webp",
        likes: 2452,
        comments: 387,
        author: "MarianaDev",
        authorAvatar: "https://avatars.githubusercontent.com/u/158165810?v=4",
    };
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <span className={styles.heroTag}>Meme do Dia</span>
                <h2 className={styles.heroTitle}>{memeOfTheDay.title}</h2>
                <p className={styles.heroDescription}>
                    {memeOfTheDay.description}
                </p>
                <div className={styles.heroAuthor}>
                    <img
                        src={memeOfTheDay.authorAvatar}
                        alt={memeOfTheDay.author}
                    />
                    <span>Por {memeOfTheDay.author}</span>
                </div>
                <div className={styles.heroStats}>
                    <span>❤️ {memeOfTheDay.likes}</span>
                    <span>💬 {memeOfTheDay.comments}</span>
                </div>
                <button className={styles.heroButton}>Ver meme completo</button>
            </div>
            <div className={styles.heroImageContainer}>
                <img
                    src={memeOfTheDay.image}
                    alt={memeOfTheDay.title}
                    className={styles.heroImage}
                />
            </div>
        </section>
    );
};

export default HeroSection;