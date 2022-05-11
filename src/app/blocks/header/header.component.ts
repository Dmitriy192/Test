import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public screenWidthSubscription: Subscription;
  public screenWidth = 0;
  public showMenu = false;
  public menuArr = [
    {
      link:'',
      name:"Main"
    },
    {
      link:'',
      name:"Blog"
    },
    {
      link:'',
      name:"Information"
    },
    {
      link:'',
      name:"Contacts"
    }
  ]
  constructor(private dataService: DataService) {
    this.screenWidthSubscription = this.dataService.screenWidthSubject.subscribe((screenWidth: number) => {
      this.screenWidth = screenWidth;
    });

  }

  public showMen() {
    this.showMenu = !this.showMenu;

  }

  ngOnInit(): void {

  }

}
