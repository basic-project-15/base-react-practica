import React from 'react';

// Components
import { Card } from '../../molecules';

// Consts
import { comidas } from '../../../common/constants';

const Comidas = () => {
  return (
    <div>
      <h1>Comidas</h1>
      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {comidas.map(comida => (
          <Card
            key={comida.id}
            titulo={comida.titulo}
            descripcion={comida.descripcion}
            precio={comida.precio}
            imagen={comida.imagen}
          />
        ))}
      </div>
    </div>
  );
};

export default Comidas;
