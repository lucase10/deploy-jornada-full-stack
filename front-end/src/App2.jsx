import React from "react";

const App2 = () => {
  return <div>App2</div>;
};

export default App2;

// rafce

// Arrow Function
// const App2 = () <h1>Olá, Mundo!</h1>;

// Nomeação de Componente
// PascalCase

// Nomeação de Variavel, Função...
// camelCase

// Nomeação de Componente
// kebab-case

// export default, posso importar com qualquer nome e sem chaves
// export "sem default", só posso importar entre chaves e com o nomne exportado

//Self closing tag
// <Header></Header>
// <Header/>

// Nomeação de classes em CSS
// Metodologia BEM
// Bocks
// Elements
// Modifiers
// bloco__elemento--modificador
// header
// header__link
// header__link--small
// item-list__header : Nomes compostos são separados por -

//  Tag vazia em React se chama Fragment ou Fragmento

// Componentes recebem "props"

/* {items === 5 ? (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        ) : (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        )} */

/* {Array(items)
          .fill()
          .map((currentValue, index) => (
            <SingleItem key={`${title}-${index}`} />
          ))} */

// Spread operator
// ...
// vai criar a cópia de um array ou objeto

// Nessa condição ele verifica: Existe artist? Sim, usa ele mesmo, se não, usa o "Artista"
{
  /* <p className="single-item__type">{artist ?? "Artista"}</p> */
}

// div*3 -> vai criar 3 <div></div>

// Quando componentes se re-renderizão?
// Uma das ocasiões é quando uma variável de estado usada por esse componente é atualizada

// Hook - usaState

// cls = limpa o terminal
