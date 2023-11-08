import "./main.css";

const DadosMachine = () => {
  return (
    <div className="form-control dadosMachine">
      <form className="dadosMachine__form">
        <div className="dadosMachine__form__imgDados">
          <div className="dadosMachine__form__imgDados--dados">
            <div className="dadosMachine__form__imgDados--dados--input">
              <label className="label" htmlFor="data">Date:</label>
              <input className="input" type="text" id="data"/>
            </div>
            <div className="dadosMachine__form__imgDados--dados--input">
              <label className="label" htmlFor="modelo">Modelo:</label>
              <input className="input" type="text" id="modelo"/>
            </div>
            <div className="dadosMachine__form__imgDados--dados--input">
              <label className="label" htmlFor="serie">N° Serie:</label>
              <input className="input" type="text" id="serie"/>
            </div>
            <div className="dadosMachine__form__imgDados--dados--input">
              <label className="label" htmlFor="heure">Heure:</label>
              <input className="input" type="text" id="heure"/>
            </div>
            <div className="dadosMachine__form__imgDados--dados--input">
              <label className="label" htmlFor="disel">Diesel:</label>
              <input className="input" type="text" id="disel"/>
            </div>
            <div className="dadosMachine__form__imgDados--dados--input">
              <label className="label" htmlFor="netoyagen">Nettoyage:</label>
              <input className="input" type="text" id="netoyagen"/>
            </div>
            <div className="dadosMachine__form__imgDados--dados--input">
              <label className="label" htmlFor="contrato">N° contrat:</label>
              <input className="input" type="text" id="contrato"/>
            </div>
          </div>
          <div className="dadosMachine__form__imgDados--img"> 
            <img className="dadosMachine__form__imgDados--img--foto" src="./yanmar-mini-pelle-vio50.jpg" alt="" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default DadosMachine;
