import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestAPIServiceService {

  // We need Http to talk to a remote server.
 constructor(private _http: HttpClient) { }

 getJSONData(url): Observable<any>{
  console.log(url);
  return this._http
    .get(url)
    .pipe(map((res: Response) => res));
}



getBase64ImageFromURL(url: string) {
  return Observable.create((observer: Observer<string>) => {
    let img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = url;  img.src = url;
    if (!img.complete) {
      img.onload = () => {
        observer.next(this.getBase64Image(img));
        observer.complete();
      };
      img.onerror = (err) => {
        observer.error(err);
      };
    } else {
      observer.next(this.getBase64Image(img));
      observer.complete();
    }
  });
}

getBase64Image(img: HTMLImageElement) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  console.log(dataURL);
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

}
