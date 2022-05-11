import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css']
})
export class FirstSectionComponent implements OnInit {
  public screenWidthSubscription: Subscription;
  public screenWidth = 0;
  constructor(private dataService: DataService) {
    this.screenWidthSubscription = this.dataService.screenWidthSubject.subscribe((screenWidth: number) => {
      this.screenWidth = screenWidth;
    });
  }
  public advantage = [
    {
      img:"../../../../assets/icons/stroke1.svg",
      txt: "Начинаем работать без аванса"
    },
    {
      img:"../../../../assets/icons/stroke2.svg",
      txt: "Предоставляем отсрочку платежа"
    },
    {
      img:"../../../../assets/icons/stroke3.svg",
      txt: "Всегда называем справедливую цену"
    }
  ]


  ngOnInit(): void {
  }

}
