import { Component, OnInit } from '@angular/core';
import { Designation } from '../designation';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {

  constructor() { }

  public Designation = {
    name: 'Izzat Nadiri',
    desc: 'sgfjhfdhf'
    }

  ngOnInit() {
  }

}
