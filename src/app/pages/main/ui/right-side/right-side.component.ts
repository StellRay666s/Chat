import { CommonModule, NgStyle } from '@angular/common';
import { Component, ElementRef, HostListener, inject, OnInit, signal, viewChild } from '@angular/core';
import { ButtonModule, ButtonDirective } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { DataViewModule } from 'primeng/dataview';
import { Message } from "primeng/message";
import { Avatar } from "primeng/avatar";
import { MessagePlateComponent } from "./ui/message-plate/message-plate.component";
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';
import { MessageStore } from '../../store/messages/message.store';
import { WebsocketService } from '../../services/websoket.service';
import { RoomStore } from '../../store/rooms/room.store';
import { UserStore } from '../../store/user/user.store';

@Component({
  selector: 'app-right-side',
   standalone:true,
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css'],
  imports: [MessagePlateComponent, TextareaModule, ButtonDirective, FormsModule, NgStyle]
})
export class RightSideComponent implements OnInit {


  private readonly messagesStore = inject(MessageStore)
  private readonly wsService = inject(WebsocketService)
  private readonly roomStore = inject(RoomStore)
  private readonly userStore = inject(UserStore)


  messageBlock = viewChild<ElementRef<HTMLElement>>('messageBlock')
 

  userId = this.userStore.getUserData().uuId

  value = ''

  messages = this.messagesStore.getMessages()

 ngOnInit(): void {
  }


  send(){
        const box = this.messageBlock();
        if (box) {
          this.wsService.socketEmitSomeEvent('message',{text:this.value, roomId: this.roomStore.getSelectedRoom(), userId:this.userId})
          box.nativeElement.scrollTo({top:box.nativeElement.scrollHeight + 100, behavior:'smooth'})
    }
    
  }


}
