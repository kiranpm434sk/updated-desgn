import { Component, OnInit } from '@angular/core';
import { Designation } from './designation';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({

  selector: 'app-designationdisplay',
  templateUrl: './designationdisplay.component.html',
  styleUrls: ['./designationdisplay.component.css']
})
export class DesignationdisplayComponent implements OnInit {

  closeResult: string;
  constructor(private modalService: NgbModal) { }
  name:string = '';
  msg = 'onDesigDelete';
  updatedItem;
  description:string = '';
  arr: Designation[ ] = [
  new Designation('Software','Role'),
  new Designation('Data Base AdminiStator','Handle the backend DB ports configauration'),
  new Designation('Software', 'Test the Application/project in all possible ways using agile methodolgy')


 ];
  ngOnInit() {
  }



  // modal
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // modal
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
   // delete
  onDesigDelete(desig) {
    if(confirm(this.msg) === true) {
      this.arr.splice(this.arr.indexOf(desig), 1);
    }

  }


  EditItem(i) {
    this.name = this.arr[i].name ;
    this.description = this.arr[i].description ;


    this.updatedItem = i;

  }


  UpdateItem() {
    let data = this.updatedItem;
    for (let i = 0; i < this.arr.length; i++) {
      if (i == data) {
        this.arr[i].name = this.name ;
        this.arr[i].description = this.description;
      }
    }

  }

  onAddDesigClick() {

    this.arr.push(new Designation(this.name,this.description));
}


search(value) {
  if (value != "") {
    this.arr = this.arr.filter(x => x.name.indexOf(value) != -1);
  // } else {
  //   this.arr.getAllDesig().subscribe(
  //     (data: Designation[]) => {
  //       this.arr = data;
  //     },
  //     function(error) {
  //       alert(error);
  //     },
  //     function() {}
  //   );
  // }
}
}
}
