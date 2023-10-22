import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})

export class ProductionComponent implements OnInit {
  localtionArr: Array<any>;
  showLocationMenu: boolean;
  currentLocation: any
  constructor() { }

  ngOnInit(): void {
    this.currentLocation = 'Hà Nội';

    this.localtionArr = [{ name: 'Hồ Chí Minh' },
    { name: 'Hà Nội' },
    { name: 'Đà Nẵng' },
    { name: 'An Giang' },
    { name: 'Bà Rịa - Vũng Tàu' },
    { name: 'Bắc Giang' },
    { name: 'Bắc Kạn' },
    { name: 'Bạc Liêu' },
    { name: 'Bình Phước' },
    { name: 'Bình Thuận' },
    { name: 'Cà Mau' },
    ];
    this.showLocationMenu = false;
  }

  changeLocation(location: string) {
    this.currentLocation = location;
    this.showLocationMenu = false;
  }

}
