import { Component, input, Input, OnInit } from '@angular/core';
import { Message } from "primeng/message";
import { Avatar } from "primeng/avatar";

@Component({
  selector: 'app-message-plate',
  templateUrl: './message-plate.component.html',
  styleUrls: ['./message-plate.component.css'],
  imports: [Message, Avatar]
})
export class MessagePlateComponent implements OnInit {


  accountUserId = input<string>('')

  @Input()
  userId = ''
  
  @Input()
  text = ''

  constructor() { }

  ngOnInit() {
  }

}
