import { Component,Input, OnInit } from '@angular/core';
import { Person } from "../app.component";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input() person: Person

}
