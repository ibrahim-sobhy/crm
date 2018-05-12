import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyleComponent } from './lifecyle.component';
import { LifecycleService } from '../services/lifecycle.service';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { LifeCycle } from '../lifecycle';
import { of } from 'rxjs/observable/of';
import { by } from 'protractor';


describe('LifecyleComponent', () => {
  let component: LifecyleComponent;
  let fixture: ComponentFixture<LifecyleComponent>;

  //Mock dependencies
  let lifeCycleStub
  let getLifecylesSpy;


  beforeEach(() => {

    const mockLifeCycle = [
      {name: "Lifecyle 1"},
      {name: "Lifecyle 2"}
    ];

    lifeCycleStub = jasmine.createSpyObj('LifecycleService',['getLifeCylces']);
    getLifecylesSpy =  lifeCycleStub.getLifeCylces.and.returnValue(of(mockLifeCycle));

   TestBed.configureTestingModule({
    declarations: [ LifecyleComponent ],
    providers:[
      {provide: LifecycleService, useValue: lifeCycleStub }
    ]
   });

   fixture = TestBed.createComponent(LifecyleComponent);
   component = fixture.debugElement.componentInstance;
   fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of lifecycles', () => {
    const cyclesDev = fixture.debugElement.query(By.css('.lifecycle__list'));
    expect(cyclesDev).toBeTruthy();

    const lifecycles = fixture.debugElement.queryAll(By.css('.lifecycle__item'));
    expect(lifecycles[0].nativeElement.textContent).toBe("Lifecyle 1");    
    expect(lifecycles[1].nativeElement.textContent).toBe("Lifecyle 2");
  });

  
});
