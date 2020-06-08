import { Component } from '@angular/core';
export interface Person {
  name: string,
  mail: string,
  haracters: string,
  followers: number,
  following: number,
  image: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  person: Person[] = [
    {
      name: "Natasha Romanoff",
      mail: "wintersoldier@gmail.com",
      haracters: "Maecenas ut dui in ligula lacinia dictum at vitae ex. Mauris id mi et felis dapibus blandit blandit diam ipsum.",
      followers: 222,
      following: 43,
      image: "assets/images/1.png"
    },
    {
      name: "Tony Stark",
      mail: "captainamerica@gmail.com",
      haracters: "Maecenas ut dui in ligula lacinia dictum at vitae ex. Mauris id mi et felis dapibus blandit blandit diam ipsum.",
      followers: 1002,
      following: 563,
      image: "assets/images/2.png"
    },
    {
      name: "Sam Wilson",
      mail: "flyingfalcon@gmail.com",
      haracters: "Maecenas ut dui in ligula lacinia dictum at vitae ex. Mauris id mi et felis dapibus blandit blandit diam ipsum.",
      followers: 102,
      following: 53,
      image: "assets/images/3.png"
    },
    {
      name: "Steve Rogers",
      mail: "blackwidow@gmail.com",
      haracters: "Maecenas ut dui in ligula lacinia dictum at vitae ex. Mauris id mi et felis dapibus blandit blandit diam ipsum.",
      followers: 12,
      following: 113,
      image: "assets/images/4.png"
    }
  ]
  toggle(i){
    return i;
  }
  activePerson = 0;
  log(i) {
    this.activePerson = i;
    console.log(i);
  }
}
