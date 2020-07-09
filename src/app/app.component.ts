import { Component } from '@angular/core';
import { HttpService } from "./http.service";
import {} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PagedTable';
  item: Array<any>= [];
  page: number= 1;
  constructor(private http:HttpService) {
    this.getTableContents(this.page);
  }
  
  getTableContents(pageNo: number){
    this.http.getObjects(pageNo).subscribe(
      data=>{
        // console.log(data, this.page)
        this.item= data
      },
      err=> console.log(err),
      ()=> console.log("finne")
    )
  }

}
