import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DesignationdisplayComponent } from './designationdisplay/designationdisplay.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AdddesignationComponent } from './designationdisplay/adddesignation/adddesignation.component';
import { ModalContainerComponent } from './designationdisplay/modal-container/modal-container.component';
import { ModalModalContentComponent } from './designationdisplay/modal-modal-content/modal-modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignationdisplayComponent,
    AdddesignationComponent,
    ModalContainerComponent,
    ModalModalContentComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ModalModalContentComponent ]
})
export class AppModule { }
