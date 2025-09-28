import { Component, inject, OnInit } from '@angular/core';
import {Header} from '../../shared/ui/header/header';
import {LeftSide} from './ui/left-side/left-side';
import { RightSideComponent } from "./ui/right-side/right-side.component";
import { WebsocketService } from './services/websoket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [Header, LeftSide, RightSideComponent],
  standalone:true,
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private readonly wsService = inject(WebsocketService)

  constructor() { }

  ngOnInit() {
    this.wsService.initConnection()
  }

}
