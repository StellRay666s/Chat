import { Component } from '@angular/core';
import {Avatar, AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {Menu} from 'primeng/menu';

@Component({
  selector: 'app-header',
  imports: [
    AvatarGroupModule,
    AvatarModule,
    Menu
  ],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
items = [
    {
      label: 'Options',
      items: [
        {
          label: 'Refresh',
          icon: 'pi pi-refresh'
        },
        {
          label: 'Export',
          icon: 'pi pi-upload'
        }
      ]
    }
  ];

}
