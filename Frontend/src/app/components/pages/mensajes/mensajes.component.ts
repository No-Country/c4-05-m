import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  @ViewChild('messagesBox')
  private myScrollContainer!: ElementRef;

  viewEmojis: boolean;
  message: string;

  constructor(
    private router: Router
  ) {
    this.viewEmojis = false;
    this.message = '';
  }

  ngOnInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
      try {
          this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      } catch(err) { }
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  addEmoji(event: any) {

    this.message += event.emoji.native;

    this.viewEmojis = false;

  }

}
