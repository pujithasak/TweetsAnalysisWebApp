import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiechartComponent } from './piechart/piechart.component';
import { HttpClientModule} from '@angular/common/http';
import { Query1Component } from './query1/query1.component';
import { HttpModule } from '@angular/http';
import { Keys2Pipe } from './keys2.pipe';
import { Query2Component } from './query2/query2.component';
import { Query3Component } from './query3/query3.component';
import { Query4Component } from './query4/query4.component';
import { Query5Component } from './query5/query5.component';
import { Query6Component } from './query6/query6.component';
import { Query7Component } from './query7/query7.component';
import { Query8Component } from './query8/query8.component';
import { Query9Component } from './query9/query9.component';
import { Query10Component } from './query10/query10.component';
import { Query11Component } from './query11/query11.component';
import { Query12Component } from './query12/query12.component';

@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent,
    Query1Component,
    Keys2Pipe,
    Query2Component,
    Query3Component,
    Query4Component,
    Query5Component,
    Query6Component,
    Query7Component,
    Query8Component,
    Query9Component,
    Query10Component,
    Query11Component,
    Query12Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
