import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModalContentComponent } from './modal-modal-content.component';

describe('ModalModalContentComponent', () => {
  let component: ModalModalContentComponent;
  let fixture: ComponentFixture<ModalModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
