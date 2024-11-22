import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"examensl","appId":"1:1038105088032:web:299111ad7fed32228d6c45","storageBucket":"examensl.firebasestorage.app","apiKey":"AIzaSyAQVOhM3pvj0YGWyuzCewY9y8rlX2_YRPM","authDomain":"examensl.firebaseapp.com","messagingSenderId":"1038105088032","measurementId":"G-RP1PHG5E55"})), provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
})
export class AppModule {}