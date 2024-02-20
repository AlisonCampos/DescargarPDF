
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { jsPDF } from "jspdf";

export default class GeneradorPdfComponent extends Component {
  @action
  descargarPDF() {
    let doc = new jsPDF();
    doc.text('Hola Mundo! generando y descargando un pdf', 10, 10);
    doc.save('sample.pdf');
  }
}
