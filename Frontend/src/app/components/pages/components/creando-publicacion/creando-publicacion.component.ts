import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { HttpConfigService } from '../../../../services/http-config.service';

const formData = new FormData();

@Component({
  selector: 'app-creando-publicacion',
  templateUrl: './creando-publicacion.component.html',
  styleUrls: ['./creando-publicacion.component.css']
})
export class CreandoPublicacionComponent implements OnInit {

  message: string = 'Subiendo...';
  progress: number = 0;

  constructor(
    public dialogRef: MatDialogRef<CreandoPublicacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private httpService: HttpConfigService
  ) {

    formData.append('description', this.data.description);
    formData.append('postImg', this.data.foto);

    this.httpService
      .post(`${environment.apiUrl}/posts`, formData, true)
      .subscribe({
        next: (resp) => {
          this.progress = 100;
        },
        error: (error) => {},
        complete: () => {
          this.message = 'Listo!';
        },
      });
  }

  ngOnInit(): void {
  }

  goHome() {
    // this.dialog.closeAll();
    window.location.reload();
  }

}
