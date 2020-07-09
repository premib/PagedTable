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
  limit: number= 10;
  pageSize: number =70;
  constructor(private http:HttpService) {
    this.getTableContents();
  }
  
  getTableContents(){
    console.log(this.page, this.limit)
    this.http.getObjects(this.page, this.limit).subscribe(
      data=>{
        this.item= data
      },
      err=> console.log(err),
      ()=> console.log("finne")
    )
  }
  getLimitSymbol(current: number) {
    return [5, 10][current - 1];
  }

  valueChange(num: number){
    if(this.limit != num){
      if(num == 5){
        this.pageSize*= 2;
        this.page= this.page*2-1;
      }
      else{
        this.pageSize/= 2;
        this.page= Math.ceil(this.page/2);
      }
    }
    this.limit= num;
    this.getTableContents();
  }
}
