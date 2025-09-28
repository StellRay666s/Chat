import { Component, Input, OnInit } from '@angular/core';
import { Avatar } from "primeng/avatar";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [Avatar]
})
export class CardComponent implements OnInit {

  @Input()
  name = ''

  @Input()
  message = ''


  constructor() { }

  ngOnInit() {
  }

}
