import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LifecyleComponent } from './lifecyle/lifecyle.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

//Mock for the inner componetns
@Component({selector: 'app-lifecyle', template: ''})
class LifeCycleStubComponent {}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LifeCycleStubComponent
      ],
    }).compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeDefined();
  }));

  it('should have a navigations', () => {
      const nav  = fixture.debugElement.query(By.css('.services-nav'));
      expect(nav).toBeTruthy();
  });

  it('should have complaint details', () => {
    const complaintDetails = fixture.debugElement.query(By.css('.details-section'));
    expect(complaintDetails).toBeTruthy();
  });
});
