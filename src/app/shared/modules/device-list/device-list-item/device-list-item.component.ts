import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../../../../device';

@Component({
  selector: 'app-device-list-item',
  templateUrl: './device-list-item.component.html',
  styleUrls: ['./device-list-item.component.scss']
})
export class DeviceListItemComponent implements OnInit {

  constructor() { }

  @Input() item!: Device; 

  ngOnInit(): void {
  }

}
