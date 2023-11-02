import 'bootstrap/dist/css/bootstrap.min.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Header from "./components/Header/main";
import DadosMachine from './components/Dados-machine/main';
import DadosExterior from './components/Dados-exterior/main';
import './App.css'


function App() {
  const gerarPDF = () => {
    const conteudoHTML = document.getElementById('conteudoHTML');

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
      pdf.save('arquivo.pdf');
    });
  };
  

  return (
    <>
    <div className="container" id='conteudoHTML'>
      <Header />
      <DadosMachine />
      <DadosExterior />
    </div>
    <button onClick={gerarPDF}>Gerar PDF</button>
    </>
    
    
    
    
  )
}

export default App

