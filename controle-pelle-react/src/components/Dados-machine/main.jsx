import "./main.css";

const DadosMachine = () => {
  return (
    <div className="form-control dadosMachine">
      <form className="dadosMachine__form">
        <div className="dadosMachine__form__imgDados">
          <div className="dadosMachine__form__imgDados--dados">
            <div className="dadosMachine__form__imgDados--dados--input">
              <label className="label" htmlFor="data">Date:</label>
              <input className="input" type="text" />
            </div>
            <div className="dadosMachine__form__imgDados--dados--input">
              <label className="label" htmlFor="modelo">Modelo:</label>
              <input className="input" type="text" />
            </div>
            <div className="dadosMachine__form__imgDados--dados--input">
              <label className="label" htmlFor="serie">N° Serie:</label>
              <input className="input" type="text" />
            </div>
            <div className="dadosMachine__form__imgDados--dados--input">
              <label className="label" htmlFor="Heure">Heure:</label>
              <input className="input" type="text" />
            </div>
            <div className="dadosMachine__form__imgDados--dados--input">
              <label className="label" htmlFor="Heure">Contrato:</label>
              <input className="input" type="text" />
            </div>
            <div className="dadosMachine__form__imgDados--dados--input">
              <label className="label" htmlFor="Heure">Cliente:</label>
              <input className="input" type="text" />
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
