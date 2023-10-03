const apiReceitas = "https://www.themealdb.com/api/json/v1/1";

//construção da api do site de receitas da Dri

export async function pesquisandoReceitasPorNome(nome) {
  try {
    const resposta = await fetch(`${apiReceitas}`);
    if (!resposta.ok) {
      throw new Error("Erro ao tentar solicitar API");
    }
    const dados = await resposta.json();
    return dados.meals || [];
  } catch (error) {
    throw error;
  }
}

export async function  pegarReceitaPorNome(id){
    try{
        const resposta = await fetch(`${apiReceitas}`);
        if(!resposta.ok){
            throw new Error (" Erro ao tentar solicitar API");
        }
        const dados = await resposta.json();
        return dados.meals[0] || null;
    } catch (error){
        throw error;
    }
}


