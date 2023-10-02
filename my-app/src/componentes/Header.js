
// Ogranização do header para pesquisa das receitas e título do site
export default function Header() {
    return (
      
      <header className="header">
        <div className="pesquisar">
        <nav>
          <ul>
            <li className="inicio"><a href="/">Início</a></li>
            <li ><a href="/receitas" >Pesquisar Receitas</a></li>
            <li ><a href="/receitas-por-letra">Receitas por Letra</a></li>
            <li ><a href="/receitas-por-ingredientes">Receitas por Ingredientes</a></li>
            
          </ul>
        </nav>
        <h1>Receitas da Dri</h1>
        </div>
      </header>
    )
  }
