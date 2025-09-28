import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { CardComponent } from "./ui/card/card.component";
import { RoomStore } from '../../store/rooms/room.store';
import { WebsocketService } from '../../services/websoket.service';

@Component({
  selector: 'app-left-side',
  standalone:true,
   imports: [DataViewModule, ButtonModule, CommonModule, CardComponent],
  templateUrl: './left-side.html',
  styleUrl: './left-side.scss'
})
export class LeftSide {
    
private readonly roomStore = inject(RoomStore)
  rooms = this.roomStore.getRooms()
  private readonly wsService = inject(WebsocketService)

  selectRooom(uuId:string){
    this.roomStore.setSelectedRoom(uuId)
    this.wsService.socketEmitSomeEvent<{uuId:string}>('messages', {uuId})
  }

    ngOnInit() {
    }
}
