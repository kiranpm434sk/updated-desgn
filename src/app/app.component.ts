import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'designation';
}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//   <input type="button" value="load items">
//  <ul>
//  <li  (load)="ngOnInit() "*ngFor="let number of numberArray">
//  <span class="badge">{{number}}</span>
//  <li>
//  </ul>`
// })
// export class AppComponent implements OnInit {
//   numberArray: Array<number> = [];
//     ngOnInit(): void {
//       for (var i = 0; i < 1000; i++) {
//         this.numberArray.push(i);
//       }
//       console.log(numberArray);
//     }
//   };
// }
