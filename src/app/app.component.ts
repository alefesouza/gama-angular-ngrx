import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'aula5';
  counter$: Observable<number>;

  constructor(private store: Store<number>) {

  }

  ngOnInit() {
    this.counter$ = this.store.select('counter');
  }
}
