import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js 13!</a>
      </h1>

      <div className={styles.grid}>
        <Link href="/blog" className={styles.card}>
          <h2>Blog（SSG版）</h2>
          <p>ビルド時にSSGされたBlogはこちら</p>
        </Link>
      </div>
    </main>
  );
}
