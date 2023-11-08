import "./main.css";

const DadosExterior = () => {
  return (
    <div className="dados">
      <form className="form-control dados__form">
        <div className="dados__form__menu mb-2">
          <div className="row bg-secondary">
            <div className="col-4">
              <h4>Inside / Outside</h4>
            </div>
            <div className="col-4">
              <h4>Départ</h4>
            </div>
            <div className="col-4">
              <h4>Retour</h4>
            </div>
          </div>
        </div>
        <div className="dados__form__items">
          <div className="row">
            <div className="dados__form__items__div col-4">
                <p>Machine propre</p>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="departlavage" id="depart_Lavage_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="departlavage" id="depart_Lavage_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="returnlavage" id="return_Lavage_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="returnlavage" id="return_Lavage_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="dados__form__items__div col-4">
                <p>Diesel</p>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="departCarburant" id="depart_Carburant_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="departCarburant" id="depart_Carburant_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="returnCarburant" id="return_Carburant_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="returnCarburant" id="return_Carburant_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="dados__form__items__div col-4">
                <p>Vitres</p>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="departVitres" id="depart_vitre_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="departVitres" id="depart_vitre_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="returnVitres" id="return_vitre_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="returnVitres" id="return_vitre_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="dados__form__items__div col-4">
                <p>Rétroviseur</p>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="departretrovseur" id="depart_Retroviseur_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="departretrovseur" id="depart_Retroviseur_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="returnretrovseur" id="return_Retroviseur_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="returnretrovseur" id="return_Retroviseur_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="dados__form__items__div col-4">
                <p>Gyrophares</p>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="departgirophares" id="depart_Gyrophares_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="departgirophares" id="depart_Gyrophares_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="returngirophares" id="return_Gyrophares_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="returngirophares" id="return_Gyrophares_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="dados__form__items__div col-4">
                <p>Essuie-Glace</p>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="departessuieGlace" id="depart_Glace_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="departessuieGlace" id="depart_Glace_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="returnessuieGlace" id="return_Glace_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="returnessuieGlace" id="return_Glace_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="dados__form__items__div col-4">
                <p>Graissage</p>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="departGraisse" id="depart_Graissage_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="departGraisse" id="depart_Graissage_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="returnGraisse" id="return_Graissage_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="returnGraisse" id="return_Graissage_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="dados__form__items__div col-4">
                <p>Godets dents</p>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="departGodets" id="depart_GodetDent_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="departGodets" id="depart_GodetDent_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="returnGodets" id="return_GodetDent_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="returnGodets" id="return_GodetDent_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="dados__form__items__div col-4">
                <p>Chenilles / Pneus</p>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="departChenilles" id="depart_Chenilles_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="departChenilles" id="depart_Chenilles_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="returnChenilles" id="return_Chenilles_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="returnChenilles" id="return_Chenilles_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="dados__form__items__div col-4">
                <p>Phares</p>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="departPhares" id="depart_Phares_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="departPhares" id="depart_Phares_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="returnPhares" id="return_Phares_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="returnPhares" id="return_Phares_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="dados__form__items__div col-4">
                <p>Carrosserie</p>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="departCarrosserie" id="depart_Carrosserie_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="departCarrosserie" id="depart_Carrosserie_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="returnCarrosserie" id="return_Carrosserie_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="returnCarrosserie" id="return_Carrosserie_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="dados__form__items__div col-4">
                <p>Flexibles</p>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="departFlexibles" id="depart_Flexibles_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="departFlexibles" id="depart_Flexibles_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="returnFlexibles" id="return_Flexibles_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="returnFlexibles" id="return_Flexibles_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="dados__form__items__div col-4">
                <p>Fuites</p>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="departFuites" id="depart_Fuites_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="departFuites" id="depart_Fuites_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="returnFuites" id="return_Fuites_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="returnFuites" id="return_Fuites_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="dados__form__items__div col-4">
                <p>Siège</p>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="departSiege" id="depart_Siege_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="departSiege" id="depart_Siege_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="returnSiege" id="return_Siege_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="returnSiege" id="return_Siege_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="dados__form__items__div col-4">
                <p>Manettes</p>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="departManettes" id="depart_Manettes_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="departManettes" id="depart_Manettes_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="returnManettes" id="return_Manettes_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="returnManettes" id="return_Manettes_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="dados__form__items__div col-4">
                <p>Clé</p>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="departCle" id="depart_cle_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="departCle" id="depart_cle_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="returnCle" id="return_cle_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="returnCle" id="return_cle_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="dados__form__items__div col-4">
                <p>Clé Godet</p>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="departDeeverrouillage" id="depart_CleGodet_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="departDeeverrouillage" id="depart_CleGodet_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="returnDeeverrouillage" id="return_CleGodet_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="returnDeeverrouillage" id="return_CleGodet_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <hr />
          </div>
          </div>
          <div className="row">
            <div className="dados__form__items__div col-4">
                <p>Chauffage</p>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="departChauffage" id="depart_Chauffage_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="departChauffage" id="depart_Chauffage_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <div className="dados__form__items__div col-4">
                <input className="dados__form__items__div--input" type="radio" name="returnChauffage" id="return_Chauffage_ok" value="OK" /><span className="spanPret">PRET</span>..
                <input type="radio" name="returnChauffage" id="return_Chauffage_non" value="NON" /><span className="spanNon" >NON</span>
            </div>
            <hr />
          </div>
          <div className="dadosMachine__form__imgDados--dados--input">
              <label className="label" htmlFor="controlePor">Controlé par :</label>
              <input className="input" type="text" id="controlePor"required/>
            </div>
      </form>
    </div>
  );
};

export default DadosExterior;
