import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  width = screen.width;

  async resize() {
    await (this.width !== screen.width);
    var logo = document.getElementById('logo');
    var detailBox = document.getElementById('wrapper');
    detailBox.setAttribute('style', 'width: ' + logo.clientWidth + 'px;');
  }
  
  ngOnInit() {
    var logo = document.getElementById('logo');
    var detailBox = document.getElementById('wrapper');
    detailBox.setAttribute('style', 'width: ' + logo.clientWidth + 'px;');
  }

}
