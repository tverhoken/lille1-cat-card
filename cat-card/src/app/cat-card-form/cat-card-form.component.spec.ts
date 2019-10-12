import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCardFormComponent } from './cat-card-form.component';

describe('CatCardFormComponent', () => {
  let component: CatCardFormComponent;
  let fixture: ComponentFixture<CatCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatCardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
