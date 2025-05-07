// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        
        <header>
          {/* Seu cabeçalho com navegação, logo, etc */}
          <nav>
            <a href="/">Home</a>
            <a href="/animes">Animes</a>
            <a href="/login">Login</a>
          </nav>
        </header>
        
        <main>
          {children} {/* Aqui é onde o conteúdo de cada página será renderizado */}
        </main>
        
        <footer>
          {/* Seu rodapé */}
        </footer>
      </body>
    </html>
  );
}