import { Component,Input,OnInit } from '@angular/core';
import { Person } from "../app.component";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input() person: Person
}
