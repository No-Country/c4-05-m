import { HttpConfigService } from './../../../services/http-config.service';
import { LoginService } from './../../../services/login.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css'],
})
export class MensajesComponent implements OnInit {
  @ViewChild('messagesBox')
  private myScrollContainer!: ElementRef;
  @ViewChild('inputMessage') private theInputMessage!: ElementRef;

  viewEmojis: boolean;
  message: string;
  user: any;
  outcomingMessages: any[] = [];
  userImg!: string;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private httpService: HttpConfigService,
    private _title: Title
  ) {
    this._title.setTitle('Fashion Hunter - Mensajes');
    this.viewEmojis = false;
    this.message = '';
  }

  ngOnInit() {
    this.scrollToBottom();

    const userId = this.loginService.getUserId();

    this.httpService
      .get<any>(`${environment.apiUrl}/user/${userId}`, true)
      .subscribe({
        next: (resp: any) => {
          this.user = resp.data.user[0];
        },
        error: (error) => {},
        complete: () => {},
      });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop =
        this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  addEmoji(event: any) {
    this.message += event.emoji.native;

    this.viewEmojis = false;
  }

  sendMessage(message: string) {

    const userId = this.loginService.getUserId();

    this.httpService
      .get<any>(`${environment.apiUrl}/user/${userId}`, true)
      .subscribe({
        next: (resp: any) => {

          this.userImg = resp.data.user[0].img;
          const theMessage = {
            message,
            userImg: this.userImg,
          };

          this.outcomingMessages.push(theMessage);
          this.theInputMessage.nativeElement.value = '';
        },
        error: (error) => {},
        complete: () => {},
      });
  }
}
