import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class ADDComponent implements OnInit {

  @Input() leftSide: number;
  @Input() rightSide: number;


  @Output() result = new EventEmitter<number>();

  constructor() {
    console.log('constructor', this.leftSide);
  }

  ngOnInit() {
    console.log('onInit', this.leftSide);

  }

  onClick(): void {
    console.log('onClick');
    const total = Number(this.leftSide) + Number(this.rightSide);
    this.result.next(total);
  }

}
