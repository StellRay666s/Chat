import { Inject, Injectable, signal } from "@angular/core";
import { Message } from "../../../../model/message.model";

@Injectable({
    providedIn:'root'
})
export class MessageStore{
   private messageList = signal<Message[]>([])



   setMessages(messages:Message[]){
    this.messageList.set(messages)
   }

   setMessage(message:Message){
    this.messageList.update(val=> [...val, message])
   }

   getMessages(){
    return this.messageList
   }


}