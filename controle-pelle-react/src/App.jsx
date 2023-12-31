import 'bootstrap/dist/css/bootstrap.min.css';
//import emailjs from 'emailjs-com';  se o envio de email for ativado descomentar essa linha
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Header from "./components/Header/main";
import DadosMachine from './components/Dados-machine/main';
import DadosExterior from './components/Dados-exterior/main';
import './App.css';

function App() {
  let pdfCount = 1; // Inicializa o contador de PDF
  
  //===== Funcao que envia email desativada Fuciona corretamente.=====
  /*
  const sendEmail = () => {
    // Configure suas credenciais de e-mail
    emailjs.init('NKWHWG3vyTDxLko_u'); // Substitua 'user_your_user_id' pelo seu User ID

    // Defina um modelo de e-mail com o PDF anexado
    const templateParams = {
      to_email: 'tales_lima_1982@hotmail.com', // Endereço de e-mail do destinatário
      from_name: 'Tales', // Seu nome
      message: 'Envio de PDF gerado',
      attachment: 'arquivo.pdf', // Nome do arquivo PDF gerado
    };

    // Envie o e-mail
    emailjs.send('service_fnexzk8', 'template_rq56gjd', templateParams)

      .then((response) => {
        console.log('E-mail enviado com sucesso!', response);
      })
      .catch((error) => {
        console.error('Erro ao enviar o e-mail:', error);
      });
  };
*/


  const gerarPDF = () => {
    const conteudoHTML = document.getElementById('conteudoHTML');
    const nomeDoPDF = `controle-machine${pdfCount}.pdf`;
    // Use o html2canvas para capturar o conteúdo HTML e transformá-lo em uma imagem
    html2canvas(conteudoHTML).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // largura do PDF
      const pageHeight = 295; // altura do PDF
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // Adicione a imagem ao PDF
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Adicione mais páginas, se necessário
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Salve o PDF com um nome de arquivo
      pdf.save(nomeDoPDF);
      pdfCount++;
      // Envie o e-mail após a criação do PDF
     // vou manter desativado porque tem que pagar
     // sendEmail();
    });
  };

  return (
    <>
      <div className="container" id="conteudoHTML">
        <Header />
        <DadosMachine />
        <DadosExterior />
      </div>
      <div className="d-flex justify-content-center">
        <button onClick={gerarPDF} className="btn btn-primary">Gerar PDF</button>
      </div>
    </>
  );
  
}

export default App;
