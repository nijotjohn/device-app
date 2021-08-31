import { Component, OnInit } from '@angular/core';
import { Device } from '../../../device';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  constructor() { }

  devices: Device[] = [
    {
      id: 'eqs-tab-01',
      type: 'tablet',
      model: 'apple ipad air 1',
      imgurl: 'https://picsum.photos/200',
      possession: 'device-counter'
    },{
      id: 'eqs-tab-02',
      type: 'tablet',
      model: 'samsung galaxy tab 7',
      imgurl: 'https://picsum.photos/200',
      possession: 'device-counter'
    },{
      id: 'eqs-tab-03',
      type: 'tablet',
      model: 'google nexus 7',
      imgurl: 'https://picsum.photos/200',
      possession: 'device-counter'
    },{
      id: 'eqs-mob-01',
      type: 'smartphone',
      model: 'Apple iphone xs',
      imgurl: 'https://picsum.photos/200',
      possession: 'device-counter'
    },{
      id: 'eqs-mob-02',
      type: 'smartphone',
      model: 'samsung galaxy s10',
      imgurl: 'https://picsum.photos/200',
      possession: 'device-counter'
    },{
      id: 'eqs-mob-03',
      type: 'smartphone',
      model: 'apple iphone se',
      imgurl: 'https://picsum.photos/200',
      possession: 'device-counter'
    },{
      id: 'eqs-mob-04',
      type: 'smartphone',
      model: 'samsung galaxy note 9',
      imgurl: 'https://picsum.photos/200',
      possession: 'device-counter'
    },
  ];

  ngOnInit(): void {
  }

}
