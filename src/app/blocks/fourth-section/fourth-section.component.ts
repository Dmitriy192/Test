import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-fourth-section',
  templateUrl: './fourth-section.component.html',
  styleUrls: ['./fourth-section.component.css']
})
export class FourthSectionComponent implements OnInit {

  public screenWidthSubscription: Subscription;
  public screenWidth = 0;
  constructor(private dataService: DataService) {
    this.screenWidthSubscription = this.dataService.screenWidthSubject.subscribe((screenWidth: number) => {
      this.screenWidth = screenWidth;
    });
  }

  ngOnInit(): void {
  }

}
