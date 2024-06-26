import React from "react";
import Header from '../../components/Header'
import CategoriasCards from '../../components/CategoriasCards/CategoriasCards'
import './Categories.css'

function CategoriesX() {
  return (
    <div className="Categorias">
      <div className="boxHeader">
        <Header />
      </div>
      <div className="boxCategoriasCards">
        <CategoriasCards />
      </div>
    </div>
  );
}

export default CategoriesX;
