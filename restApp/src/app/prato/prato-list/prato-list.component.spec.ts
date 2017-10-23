import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoListComponent } from './prato-list.component';

describe('PratoListComponent', () => {
  let component: PratoListComponent;
  let fixture: ComponentFixture<PratoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
