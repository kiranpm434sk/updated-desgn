import { Component, OnInit } from '@angular/core';
import { Designation } from '../designation';
// import { DesignationdataService } from '../designationdata.service';

@Component({
  selector: 'app-adddesignation',
  templateUrl: './adddesignation.component.html',
  styleUrls: ['./adddesignation.component.css']
})
export class AdddesignationComponent implements OnInit {
  name:string="";
  desc:string="";

  arr: Designation[] = [];
  constructor() {}

  ngOnInit() {

  }

// onEditDesigClick(item:Designation){

//     if(item.arr=='done'){
//       item.desc='pending';
//     }
//     else{
//       item.status='done';
//     }
// }
}
//     let filteredNames=this.remove_duplicates(this.arr);
//     console.log(filteredNames);
//     console.log(this.arr);
// }
// remove_duplicates(arr) {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         obj[arr[i]] = true;
//     }
//     arr = [];
//     for (let key in obj) {
//         arr.push(key);
//     }
//     return arr;
// }
