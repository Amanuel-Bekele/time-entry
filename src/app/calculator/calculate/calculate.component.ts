import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  myValue = 0;
  myValue2 = 0;


  myResultValue = 0;


  constructor() { }

  ngOnInit() {

  }

  onAdd($result: number){
    console.log("onAdd ",$result);
    this.myResultValue = $result;

  }

}
