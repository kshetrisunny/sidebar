import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loyaltypoints',
  templateUrl: './loyaltypoints.component.html',
  styleUrls: ['./loyaltypoints.component.css']
})
export class LoyaltypointsComponent implements OnInit {

  public counter: number = 1;
  isDisabled = true;
  marked = false;
  theCheckbox = false;

  constructor() { }

  ngOnInit() {
  }

  toggle(e) {
    this.marked = e.target.checked;
    // this.isDisabled = !this.isDisabled;
    // return;
  }

  dec() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }

  inc() {
    this.counter +=1;
  }
}
