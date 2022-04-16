import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-crear-publicacion1',
  templateUrl: './crear-publicacion1.component.html',
  styleUrls: ['./crear-publicacion1.component.css']
})
export class CrearPublicacion1Component implements OnInit {

  previsualizacion!: string;

  constructor(
    private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<CrearPublicacion1Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    this.extraerBase64(data.foto).then((imagen: any) => {
      console.log(imagen);

      this.previsualizacion = imagen.base;
    });
  }

  ngOnInit(): void {
  }

  extraerBase64 = async ($event: any) =>
    new Promise((resolve, reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result,
          });
        };
        reader.onerror = (error) => {
          resolve({
            base: null,
          });
        };
        return true;
      } catch (e) {
        return null;
      }
    });

}
