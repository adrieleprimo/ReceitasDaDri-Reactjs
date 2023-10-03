import React from 'react';

export default function InformacaoDaReceita({ receita, limiteDeCaracteres }) {
  const instrucoesLimitadas = receita.strInstructions.slice(0, 100);
  const instrucoesExcedentes = receita.strInstructions.length > 100 ? '...' : '';

  return (
    <div className="informacao-da-receita">
      <ul>
        <p>{instrucoesLimitadas + instrucoesExcedentes}</p>
        <a href={receita.strYoutube} target="_blank" rel="noopener noreferrer" className='link-youtube'>
      Youtube
      </a>
      </ul>
    </div>
  );
}