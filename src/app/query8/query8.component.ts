import { Component, OnInit } from '@angular/core';
import { RestAPIServiceService } from '../rest-apiservice.service';

@Component({
  selector: 'app-query8',
  templateUrl: './query8.component.html',
  styleUrls: ['./query8.component.css']
})
export class Query8Component implements OnInit {

  base64Image: any;
  imgsrc :'http://127.0.0.1:5000//api/TweetsAnalysis/query8Plot';
  isTemplateShown: boolean;
  users: any;
  constructor(    
    public _httpServce:RestAPIServiceService  
  ) { }  

  ngOnInit(): void {
    let outputUrl = 'http://127.0.0.1:5000/api/TweetsAnalysis/query8Output';
    this._httpServce.getJSONData(outputUrl).subscribe(res =>{
      console.log("Response from url..",res);
      
      this.users = JSON.parse(res['Results']);
      
   });  
   
   let imageUrl = 'http://127.0.0.1:5000/api/TweetsAnalysis/query8Plot';
   this._httpServce.getBase64ImageFromURL(imageUrl).subscribe(base64data => {
     console.log(base64data);
     this.base64Image = 'data:image/jpg;base64,' + base64data;
   });

  } 


}
