import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { message } from '../message';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(
    public messagesService: MessagesService,
  ) { }

  input = new FormControl('');

  ngOnInit() {
  }

  onSend() {
    window.alert(this.input.value);
    this.input.reset();
  }

}
