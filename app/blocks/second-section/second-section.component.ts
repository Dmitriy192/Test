import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.css']
})
export class SecondSectionComponent implements OnInit {
  public youGet = [
    {
      img:"../../../../assets/icons/checkmark.svg",
      info:"Отчет на который на 100% можно положиться"
    },
    {
      img:"../../../../assets/icons/checkmark.svg",
      info:"Экономию времени и прогнозируемость сроков"
    },
    {
      img:"../../../../assets/icons/checkmark.svg",
      info:"Предварительные результаты сразу на месте"
    }
  ]

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
