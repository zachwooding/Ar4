import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {

  constructor(private platform: Platform, private camera: Camera, private router:Router, private cameraPreview: CameraPreview, private alertCtrl: AlertController) { }
  

  ngOnInit(){

  }

  openARCamera(){

    this.router.navigate(['../ar-cam'])
  }

  openNormalCamera(){
    const cameraOpts: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(cameraOpts).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });

  }

  

  
  async presentAlert(error?) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: error,
        buttons: ['OK']
      });
  
      await alert.present();
    }
}