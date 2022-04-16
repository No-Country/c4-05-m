import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { CrearPublicacion1Component } from '../crear-publicacion1/crear-publicacion1.component';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css']
})
export class CrearPublicacionComponent implements OnInit {

  previsualizacion!: string;
  foto: any;

  constructor(
    private sanitizer: DomSanitizer,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any): boolean {
    if (event.target.files[0]) {

      const archivoCapturado = event.target.files[0];
      this.extraerBase64(archivoCapturado).then((imagen: any) => {
        this.previsualizacion = imagen.base;
      });
      this.foto = archivoCapturado;

      const dialogRef = this.dialog.open(CrearPublicacion1Component, {
        disableClose: false,
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
        console.log(result);
      });

      return true;
    } else {
      return false;
    }
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
      return true;
    } catch (e) {
      return null;
    }
  });

}
