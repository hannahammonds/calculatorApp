import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.css'],
})
export class TipCalculatorComponent {
  tip: any;
  newTotal: any;
  tipPer: any;
  totalPer: any;
  price: number;
  people: number;

  constructor() {}

  chooseTip(price, rate: number = 20) {
    var tip = this.price * rate;
    console.log('Tip Total:', tip);
  }

  totalWithTip() {
    var tip;
    var newTotal = this.price + tip;
    console.log(newTotal);
    return newTotal;
  }

  tipPerson(people) {
    var tip;
    var tipPer = this.tip / people;
    console.log(tip / people);
    return tipPer;
  }

  totalPerson(people) {
    var newTotal;
    var totalPer = this.newTotal / people;
    console.log(totalPer);
    return totalPer;
  }

  reset() {
    this.price = 0;
    this.people = 0;
  }
}
