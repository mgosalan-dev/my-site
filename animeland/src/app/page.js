// app/page.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao Anime Site</h1>
      <p>Descubra e acompanhe seus animes favoritos</p>
      
      <div className="cta-buttons">
        <Link href="/animes" className="btn">
          Explorar Animes
        </Link>
        <Link href="/login" className="btn btn-secondary">
          Login
        </Link>
      </div>
    </div>
  );
}