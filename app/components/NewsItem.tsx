import styles from "../styles/News.module.css";
import Image from "next/image";

export default function NewsItem({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className={styles.news_item}>
      <Image
        className={styles.image}
        src="https://picsum.photos/200"
        width={200}
        height={200}
        alt="Haber Resmi"
      />
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}
