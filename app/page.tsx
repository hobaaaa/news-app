import NewsItem from "./components/NewsItem";
import styles from "./styles/Home.module.css";

async function getData() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    );
    if (!res.ok) {
      throw new Error("Veri çekme başarısız oldu.");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return {
      error: true,
      message:
        "Haberleri yüklemek mümkün olmadı. Lütfen daha sonra tekrar deneyeiniz.",
    };
  }
}

export default async function Page() {
  const data = await getData();
  const articles = data.articles;

  return (
    <div className={styles.container}>
      <div className={styles.main}></div>
      {articles.map((article: any, index: number) => (
        <NewsItem
          key={index}
          title={articles.title}
          content={article.description}
        />
      ))}
    </div>
  );
}
