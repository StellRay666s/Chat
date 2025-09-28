import { Injectable, signal } from "@angular/core";
import { User } from "../../../../model/user.model";

@Injectable({
    providedIn:'root'
})
export class UserStore{

    private userData = signal<User>({uuId:'6e7a1406-3fcc-445c-8ce5-999b0ccfbed3', login:"danilaaaaa"})


    getUserData(){
        return this.userData()
    }
    

}