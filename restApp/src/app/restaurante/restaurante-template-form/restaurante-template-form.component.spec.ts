import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteTemplateFormComponent } from './restaurante-template-form.component';

describe('RestauranteTemplateFormComponent', () => {
  let component: RestauranteTemplateFormComponent;
  let fixture: ComponentFixture<RestauranteTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
