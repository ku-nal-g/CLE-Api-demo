import { ApiDataService } from './services/api-data.service';
import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userList:any = [];

  constructor(private apiData:ApiDataService, private spinner:NgxSpinnerService){
  }

  ngOnInit(){
    this.spinner.show();
    setTimeout(()=>{
      this.apiData.getApiData().subscribe((res) => {
        this.userList = res;
        this.spinner.hide();
      })
    },5000);
  }
}
