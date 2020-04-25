import { Component, OnInit } from '@angular/core';
import { RestAPIServiceService } from '../rest-apiservice.service';

@Component({
  selector: 'app-query7',
  templateUrl: './query7.component.html',
  styleUrls: ['./query7.component.css']
})
export class Query7Component implements OnInit {

  base64Image: any;
  imgsrc :'http://127.0.0.1:5000//api/TweetsAnalysis/query7Plot';
  isTemplateShown: boolean;
  users: any;
  constructor(    
    public _httpServce:RestAPIServiceService  
  ) { }  

  ngOnInit(): void {
    let outputUrl = 'http://127.0.0.1:5000/api/TweetsAnalysis/query7Output';
    this._httpServce.getJSONData(outputUrl).subscribe(res =>{
      console.log("Response from url..",res);
      
      this.users = JSON.parse(res['Results']);
      
   });  
   
   let imageUrl = 'http://127.0.0.1:5000/api/TweetsAnalysis/query7Plot';
   this._httpServce.getBase64ImageFromURL(imageUrl).subscribe(base64data => {
     console.log(base64data);
     this.base64Image = 'data:image/jpg;base64,' + base64data;
   });

  } 

}
