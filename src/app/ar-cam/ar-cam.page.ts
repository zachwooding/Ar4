import { Component, OnInit } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-ar-cam',
  templateUrl: './ar-cam.page.html',
  styleUrls: ['./ar-cam.page.scss'],
})
export class ArCamPage implements OnInit {

  constructor(private platform: Platform, private camera: Camera, private router:Router, private cameraPreview: CameraPreview, private alertCtrl: AlertController) { }


  ngOnInit() {
  }

  openAR(){
    var cameraPreviewOpts: CameraPreviewOptions = {
        x: 0,
        y: 0,
        width: 1000,
        height: 1000,
        camera: 'rear',
        tapPhoto: false,
        previewDrag: false,
        toBack: true,
        alpha: 1
      };

      
      this.platform.ready().then(() => {
        this.cameraPreview.startCamera(cameraPreviewOpts).then((info) => {
          //this.presentAlert();
        }).catch((err) => {
          this.presentAlert(err);
        });
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
