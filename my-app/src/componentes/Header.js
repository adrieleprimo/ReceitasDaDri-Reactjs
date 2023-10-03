
// Ogranização do header para pesquisa das receitas e título do site
export default function Header() {
    return (
      <header className="header">
        <div className="pesquisar">
        <nav>
          <ul>
            <li className="inicio"><a href="/" className="link">Início</a></li>
            <li className="abas-1"><a href="/receitas"className="link" >Pesquisar Receitas</a></li>
            <li><a href="/receitas-por-letra" className="link">Receitas por Letra</a></li>
            <li><a href="/receitas-por-ingredientes" className="link">Receitas por Ingredientes</a></li>
            
          </ul>
        </nav>
        <h1>Receitas da Meal</h1>
        </div>
      </header>
    )
  }