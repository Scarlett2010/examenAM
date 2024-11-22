import axios from 'axios';
import {
  Firestore,
  collection,
  addDoc,
} from '@angular/fire/firestore';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatosServices {
  private firestore: Firestore;

  constructor(@Inject(Firestore) firestore: Firestore) {
    this.firestore = firestore;
  }

  obtenerImagenDePerro() {
    console.log('obtenerImagenDePerro');
    return axios
      .get('https://dog.ceo/api/breed/beagle/images/random')
      .then((response) => {
        console.log('respuesta del servidor:', response);
        return response.data.message;
      })
      .catch((error) => {
        console.error('error:', error);
        throw error;
      });
  }

  obtenerLibros() {
    console.log('obtenerLibros');
    return axios
      .get('https://gutendex.com/books/?ids=1,2,3,4,5,6,7,8,9,10')
      .then((response) => {
        console.log('libros:', response);
        return response.data.results;
      })
      .catch((error) => {
        console.error('error:', error);
        throw error;
      });
  }

  /* guardar en firebase el titulo del libro y la url de la imagen */
  guardarEnFirebase(titulo: string, url: string) {
    console.log('guardarEnFirebase');
    const librosRef = collection(this.firestore, 'libros');
    const libro = {
      titulo,
      url,
    };
    return addDoc(librosRef, libro);
  }
}