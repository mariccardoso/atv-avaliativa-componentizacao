import Header from "@/components/header";
import styles from "./page.module.css";
import HeroSection from "@/components/heroSection";
import CategoriesSection from "@/components/categoriesSection";
import Feed from "@/components/feed";
import FeaturedMemesSection from "@/components/featuredMemesSection";
import CreatorsSection from "@/components/creatorsSection";
import NewsletterSection from "@/components/newsletterSection";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";

export default function Home() {
  // Array de dados dos memes para serem passados como props
  const memes = [
    {
      id: 1,
      title: "Programador às 3 da manhã",
      description:
        "Quando o código finalmente funciona depois de 5 horas debugando",
      image: "https://i.imgur.com/JbIMvq2.jpg",
      likes: 452,
      comments: 87,
      author: "DevMaster",
      authorAvatar: "https://i.pravatar.cc/150?img=11",
      category: "Programação",
    },
    {
      id: 2,
      title: "Vida de estudante",
      description: "Eu entrando na prova sem estudar",
      image: "https://i.imgur.com/DpEHvFs.jpg",
      likes: 231,
      comments: 56,
      author: "StudyGuru",
      authorAvatar: "https://i.pravatar.cc/150?img=12",
      category: "Escola",
    },
    {
      id: 3,
      title: "Reunião que poderia ser um e-mail",
      description: "Minha cara depois de 2 horas de reunião",
      image: "https://i.imgur.com/a1hJwXc.jpg",
      likes: 631,
      comments: 103,
      author: "CorporateJoker",
      authorAvatar: "https://i.pravatar.cc/150?img=13",
      category: "Trabalho",
    },
    {
      id: 4,
      title: "Quando a internet cai",
      description: "POV: Você no meio de uma partida importante",
      image: "https://i.imgur.com/uGdnlGj.jpg",
      likes: 842,
      comments: 152,
      author: "GamerLife",
      authorAvatar: "https://i.pravatar.cc/150?img=14",
      category: "Games",
    },
    {
      id: 5,
      title: "Segunda-feira chegando",
      description: "Ninguém está pronto para isso",
      image: "https://i.imgur.com/aNDyAyC.jpg",
      likes: 753,
      comments: 91,
      author: "WeekendWarrior",
      authorAvatar: "https://i.pravatar.cc/150?img=15",
      category: "Trabalho",
    },
    {
      id: 6,
      title: "Minha vida amorosa",
      description: "Expectativa vs Realidade",
      image: "https://i.imgur.com/gMy6q9Y.jpg",
      likes: 523,
      comments: 78,
      author: "RomanceExpert",
      authorAvatar: "https://i.pravatar.cc/150?img=16",
      category: "Relacionamentos",
    },
  ];

  // Dados para o meme do dia (hero section)
  const memeOfTheDay = {
    id: 7,
    title: "Meme do Dia: Quando seu código funciona de primeira",
    description:
      "Este momento raro que todos os desenvolvedores sonham em experimentar!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg2LhzVZlxsaybEJk0sjirkp68Nmrvz4EQcg&s",
    likes: 2452,
    comments: 387,
    author: "SuperCoder",
    authorAvatar: "https://i.pravatar.cc/150?img=20",
  };

  // Array de criadores em destaque
  const topCreators = [
    {
      id: 1,
      name: "MemeQueen",
      avatar: "https://i.pravatar.cc/150?img=23",
      followers: "245K",
      bio: "Criando memes que fazem seu dia melhor!",
    },
    {
      id: 2,
      name: "FunnyGuy42",
      avatar: "https://i.pravatar.cc/150?img=24",
      followers: "189K",
      bio: "Especialista em memes de programação e gatos",
    },
    {
      id: 3,
      name: "LaughFactory",
      avatar: "https://i.pravatar.cc/150?img=25",
      followers: "327K",
      bio: "Se não te fizer rir, devolvo seu tempo!",
    },
  ];

  // Categorias de memes
  const categories = [
    { id: 1, name: "Programação", icon: "💻", count: 478 },
    { id: 2, name: "Escola", icon: "📚", count: 325 },
    { id: 3, name: "Trabalho", icon: "💼", count: 642 },
    { id: 4, name: "Games", icon: "🎮", count: 513 },
    { id: 5, name: "Relacionamentos", icon: "❤️", count: 287 },
    { id: 6, name: "Esportes", icon: "⚽", count: 195 },
  ];

  // Memes em destaque
  const featuredMemes = [
    {
      id: 8,
      title: "O código em produção",
      image: "https://i.imgur.com/aVy8tFB.jpg",
      author: "DevHumor",
      category: "Programação",
      trending: true,
    },
    {
      id: 9,
      title: "Modo escuro vs Modo claro",
      image: "https://i.imgur.com/YnGsVzS.jpg",
      author: "UIDesigner",
      category: "Tecnologia",
      trending: true,
    },
    {
      id: 10,
      title: "POV: Aula online",
      image: "https://i.imgur.com/4MigGYQ.jpg",
      author: "ZoomExpert",
      category: "Escola",
      trending: false,
    },
  ];

  // Eventos próximos
  const upcomingEvents = [
    {
      id: 1,
      title: "Competição de Memes 2025",
      date: "15 de Maio, 2025",
      participants: 356,
    },
    {
      id: 2,
      title: "Workshop: Como Criar Memes Virais",
      date: "22 de Maio, 2025",
      participants: 127,
    },
  ];

  // Dados de navegação
  const navItens = [
    { label: "Home", href: "#", active: true },
    { label: "Trending", href: "#" },
    { label: "Create", href: "#" },
    { label: "Categories", href: "#" },
    { label: "Profile", href: "#" },
  ];

  // Recursos premium
  const premiumFeatures = [
    "Acesso a memes exclusivos",
    "Participação em eventos especiais",
    "Descontos em produtos parceiros",
    "Badge de criador premium",
  ]

  // Tags populares
  const popularTags = [
    { id: 1, name: "#memes" },
    { id: 2, name: "#programação" },
    { id: 3, name: "#humor" },
    { id: 4, name: "#escola" },
    { id: 5, name: "#trabalhoremoto" },
    { id: 6, name: "#games" },
    { id: 8, name: "#tecnologia" },
    { id: 10, name: "#criatividade" },
  ];

  // Dados do rodapé
  const footerData = [
    { titulo: "Navegação", links: ["Home", "Trending", "Create", "Categories", "Profile"] },
    { titulo: "Recursos", links: ["Sobre Nós", "Contato", "Política de Privacidade", "Termos de Serviço"] },
    { titulo: "Empresa", links: ["Carreiras", "Blog", "Eventos", "Comunidade"] },
    { titulo: "Legal", links: ["Direitos Autorais", "Marcas Registradas", "Isenção de Responsabilidade"] },
  ]

  // Links sociais do rodapé
  const socialLinks = [
    { id: 1, icon: "📱", url: "#" },
    { id: 2, icon: "📘", url: "#" },
    { id: 3, icon: "📸", url: "#" },
    { id: 4, icon: "🐦", url: "#" },
  ];


  return (
    <div className={styles.container}>
      <Header
        logo="MemeVerse"
        navItens={navItens}
      />
      <div className={styles.mainContent}>
        <div className={styles.contentArea}>
          <HeroSection memeOfTheDay={memeOfTheDay} />
          <CategoriesSection categories={categories} />
          <Feed memes={memes} />
          <FeaturedMemesSection featuredMemes={featuredMemes} />
          <CreatorsSection topCreators={topCreators} />
          <NewsletterSection />
        </div>
        <Sidebar 
          upcomingEvents={upcomingEvents} 
          premiumFeatures={premiumFeatures} 
          popularTags={popularTags}
        />
      </div>
      <Footer 
        footerData={footerData} 
        socialLinks={socialLinks} 
      />
    </div>
  );
}
