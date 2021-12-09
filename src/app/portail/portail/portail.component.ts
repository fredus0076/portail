import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portail',
  templateUrl: './portail.component.html',
  styleUrls: ['./portail.component.scss']
})
export class PortailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var cat = localStorage.getItem('monChat');
    if(cat){
      console.log(cat)
    }
  }

}
