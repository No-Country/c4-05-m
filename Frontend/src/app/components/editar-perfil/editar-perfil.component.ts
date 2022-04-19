import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpConfigService } from '../../services/http-config.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['../../../../css/editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  user: any;
  
  constructor(
    private httpService: HttpConfigService,
    private loginService: LoginService
  ) {
    const userId = this.loginService.getUserId();

    this.httpService.get<any>(`${environment.apiUrl}/user/${userId}`, true)
      .subscribe({
        next: (resp: any) => {
          this.user = resp.data.user;
        },
        error: error => { },
        complete: () => { }
      })
  }

  ngOnInit(): void {
  }

}

    const eliminar_cuenta = document.getElementById('eliminar-cuenta');
    const modal_container = document.getElementById('modal-container');
    const eliminar = document.getElementById('eliminar');
    
    eliminar_cuenta?.addEventListener('click', () =>{
      modal_container?.classList.add('show');
    });
    
    eliminar?.addEventListener('click', () =>{
      modal_container?.classList.remove('show');
    });