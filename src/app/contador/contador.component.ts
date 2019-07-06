import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private store: Store<number>) { }

  ngOnInit() {
    this.counter$ = this.store.select('counter');
  }

  aumentar() {
    this.store.dispatch({
      type: 'INCREMENT',
    });
  }

  diminuir() {
    this.store.dispatch({
      type: 'DECREMENT',
    });
  }

}
