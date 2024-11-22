import { Component } from '@angular/core';
import { DatosServices } from '../services/datos.service';
import { ToastController } from '@ionic/angular'; // Importar ToastController

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  imagenesDePerros: any[] = [];
  libros: any[] = [];

  constructor(private dogServices: DatosServices, private toastController: ToastController) { // Inyectar ToastController
    console.log('Constructor Tab1Page');
    console.log('dogServices:', dogServices);
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.dogServices
      .obtenerLibros()
      .then((libros) => {
        console.log('libros obtenidos:', libros);
        this.libros = libros;
        console.log('arreglo:', this.libros);
      })
      .catch((error) => {
        console.error('error:', error);
      });

    for (let i = 0; i < 10; i++) {
      this.dogServices
        .obtenerImagenDePerro()
        .then((imagen) => {
          console.log('imagen obtenida:', imagen);
          this.imagenesDePerros.push(imagen);
          console.log('arreglo:', this.imagenesDePerros);
        })
        .catch((error) => {
          console.error('error:', error);
        });
    }
  }

  async guardarLibro(libro: any, imagen: any) {
    try {
      await this.dogServices.guardarEnFirebase(libro.title, imagen); // Esperar a que se guarde
      this.mostrarToast(); // Mostrar el toast después de guardar
    } catch (error) {
      console.error('Error al guardar el libro:', error);
    }
  }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'La imagen se ha guardado correctamente.',
      duration: 2000, // Duración en milisegundos
      position: 'bottom', // Posición del toast
    });
    toast.present(); // Presentar el toast
  }
}