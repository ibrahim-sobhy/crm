import { Component, OnInit } from '@angular/core';
import { LifecycleService } from '../services/lifecycle.service';

@Component({
  selector: 'app-lifecyle',
  templateUrl: './lifecyle.component.html',
  styleUrls: ['./lifecyle.component.scss']
})
export class LifecyleComponent implements OnInit {

  public lifeCycles: Array<any>;

  constructor(private lifeCyleService: LifecycleService) { }

  ngOnInit() {
    this.getLifeCycles();
  }

  getLifeCycles() : void {
    this.lifeCyleService.getLifeCylces().subscribe(
      lifecycles => this.lifeCycles = lifecycles
    );
  }

}
