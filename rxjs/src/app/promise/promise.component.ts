import { Component, OnInit } from '@angular/core';
import * as e from 'express';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements OnInit {
  promise: unknown;
  constructor() {}
  /*create function*/
  isDellAvailable() {
    return true;
  }
  isHpavailable() {
    return false;
  }

  dell = {
    model: 'i7',
    storage: '1 tb',
  };

  hp = {
    model: 'i5',
    storage: '2 tb',
  };

  /* to create buyloptop vav &  assign new promise to it */
  buyLoptop = new Promise((resolve, reject) => {
    // resolve('promise is resolved');
    // reject('promise is rejected');
    if (this.isDellAvailable()) {
      // setTimeout(() => resolve('Dell is purchased'), 3000);
      setTimeout(() => resolve(this.dell), 3000);
    } else if (this.isHpavailable()) {
      // setTimeout(() => resolve('hp is purchased'), 2000);
      setTimeout(() => resolve(this.hp), 2000);
    } else {
      setTimeout(() => reject('loptop is not available'), 2000);
    }
  });

  ngOnInit(): void {
    /* invoke promise to use  */
    this.buyLoptop
      .then((res) => {
        console.log('Then code =>', res);
        this.promise = JSON.stringify(res);
      })
      .catch((res) => {
        console.log(`Then code => ${res}`);
        this.promise = JSON.stringify(res);
      });
  }
}
