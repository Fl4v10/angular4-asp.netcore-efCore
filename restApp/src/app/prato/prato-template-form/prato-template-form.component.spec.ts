import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoTemplateFormComponent } from './prato-template-form.component';

describe('PratoTemplateFormComponent', () => {
  let component: PratoTemplateFormComponent;
  let fixture: ComponentFixture<PratoTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratoTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratoTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
