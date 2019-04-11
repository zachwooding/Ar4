import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {ArJs} from '../../../node_modules/ar.js/aframe/examples/vendor/aframe/build/aframe.min.js';
import{AframeAr} from '../../../node_modules/ar.js/aframe/build/aframe-ar.js';
import {ArJs} from '../../../node_modules/ar.js/';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArJs,
    AframeAr
  ]
})
export class ComponentsModule { }
