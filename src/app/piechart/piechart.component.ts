import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  isQuery1Shown: boolean;
  isQuery2Shown: boolean;
  isQuery3Shown: boolean;
  isQuery4Shown: boolean;
  isQuery5Shown: boolean;
  isQuery6Shown: boolean;
  isQuery7Shown: boolean;
  isQuery8Shown: boolean;
  isQuery9Shown: boolean;
  isQuery10Shown: boolean;
  isQuery11Shown: boolean;
  isQuery12Shown: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isQuery1Shown = false;
    this.isQuery2Shown = false;
    this.isQuery3Shown = false;
    this.isQuery4Shown = false;
    this.isQuery5Shown = false;
    this.isQuery6Shown = false;
    this.isQuery7Shown = false;
    this.isQuery8Shown = false;
    this.isQuery9Shown = false;
    this.isQuery10Shown = false;
    this.isQuery11Shown = false;
    this.isQuery12Shown = false;
  }
  showQuery1Result() {
    this.isQuery1Shown = true;
    this.isQuery2Shown = false;
    this.isQuery3Shown = false;
    this.isQuery4Shown = false;
    this.isQuery5Shown = false;
    this.isQuery6Shown = false;
    this.isQuery7Shown = false;
    this.isQuery8Shown = false;
    this.isQuery9Shown = false;
    this.isQuery10Shown = false;
    this.isQuery11Shown = false;
    this.isQuery12Shown = false;
  }
  
  showQuery2Result() {
    this.isQuery1Shown = false;
    this.isQuery2Shown = true;
    this.isQuery3Shown = false;
    this.isQuery4Shown = false;
    this.isQuery5Shown = false;
    this.isQuery6Shown = false;
    this.isQuery7Shown = false;
    this.isQuery8Shown = false;
    this.isQuery9Shown = false;
    this.isQuery10Shown = false;
    this.isQuery11Shown = false;
    this.isQuery12Shown = false;
  }
  
  showQuery3Result() {
    this.isQuery1Shown = false;
    this.isQuery2Shown = false;
    this.isQuery3Shown = true;
    this.isQuery4Shown = false;
    this.isQuery5Shown = false;
    this.isQuery6Shown = false;
    this.isQuery7Shown = false;
    this.isQuery8Shown = false;
    this.isQuery9Shown = false;
    this.isQuery10Shown = false;
    this.isQuery11Shown = false;
    this.isQuery12Shown = false;
  }

  showQuery4Result() {
    this.isQuery1Shown = false;
    this.isQuery2Shown = false;
    this.isQuery3Shown = false;
    this.isQuery4Shown = true;
    this.isQuery5Shown = false;
    this.isQuery6Shown = false;
    this.isQuery7Shown = false;
    this.isQuery8Shown = false;
    this.isQuery9Shown = false;
    this.isQuery10Shown = false;
    this.isQuery11Shown = false;
    this.isQuery12Shown = false;
  }

  showQuery5Result() {
    this.isQuery1Shown = false;
    this.isQuery2Shown = false;
    this.isQuery3Shown = false;
    this.isQuery4Shown = false;
    this.isQuery5Shown = true;
    this.isQuery6Shown = false;
    this.isQuery7Shown = false;
    this.isQuery8Shown = false;
    this.isQuery9Shown = false;
    this.isQuery10Shown = false;
    this.isQuery11Shown = false;
    this.isQuery12Shown = false;
  }

  showQuery6Result() {
    this.isQuery1Shown = false;
    this.isQuery2Shown = false;
    this.isQuery3Shown = false;
    this.isQuery4Shown = false;
    this.isQuery5Shown = false;
    this.isQuery6Shown = true;
    this.isQuery7Shown = false;
    this.isQuery8Shown = false;
    this.isQuery9Shown = false;
    this.isQuery10Shown = false;
    this.isQuery11Shown = false;
    this.isQuery12Shown = false;
  }

  showQuery7Result() {
    this.isQuery1Shown = false;
    this.isQuery2Shown = false;
    this.isQuery3Shown = false;
    this.isQuery4Shown = false;
    this.isQuery5Shown = false;
    this.isQuery6Shown = false;
    this.isQuery7Shown = true;
    this.isQuery8Shown = false;
    this.isQuery9Shown = false;
    this.isQuery10Shown = false;
    this.isQuery11Shown = false;
    this.isQuery12Shown = false;
  }

  showQuery8Result() {
    this.isQuery1Shown = false;
    this.isQuery2Shown = false;
    this.isQuery3Shown = false;
    this.isQuery4Shown = false;
    this.isQuery5Shown = false;
    this.isQuery6Shown = false;
    this.isQuery7Shown = false;
    this.isQuery8Shown = true;
    this.isQuery9Shown = false;
    this.isQuery10Shown = false;
    this.isQuery11Shown = false;
    this.isQuery12Shown = false;
  }

  showQuery9Result() {
    this.isQuery1Shown = false;
    this.isQuery2Shown = false;
    this.isQuery3Shown = false;
    this.isQuery4Shown = false;
    this.isQuery5Shown = false;
    this.isQuery6Shown = false;
    this.isQuery7Shown = false;
    this.isQuery8Shown = false;
    this.isQuery9Shown = true;
    this.isQuery10Shown = false;
    this.isQuery11Shown = false;
    this.isQuery12Shown = false;
  }

  showQuery10Result() {
    this.isQuery1Shown = false;
    this.isQuery2Shown = false;
    this.isQuery3Shown = false;
    this.isQuery4Shown = false;
    this.isQuery5Shown = false;
    this.isQuery6Shown = false;
    this.isQuery7Shown = false;
    this.isQuery8Shown = false;
    this.isQuery9Shown = false;
    this.isQuery10Shown = true;
    this.isQuery11Shown = false;
    this.isQuery12Shown = false;
  }

  showQuery11Result() {
    this.isQuery1Shown = false;
    this.isQuery2Shown = false;
    this.isQuery3Shown = false;
    this.isQuery4Shown = false;
    this.isQuery5Shown = false;
    this.isQuery6Shown = false;
    this.isQuery7Shown = false;
    this.isQuery8Shown = false;
    this.isQuery9Shown = false;
    this.isQuery10Shown = false;
    this.isQuery11Shown = true;
    this.isQuery12Shown = false;
  }

  showQuery12Result() {
    this.isQuery1Shown = false;
    this.isQuery2Shown = false;
    this.isQuery3Shown = false;
    this.isQuery4Shown = false;
    this.isQuery5Shown = false;
    this.isQuery6Shown = false;
    this.isQuery7Shown = false;
    this.isQuery8Shown = false;
    this.isQuery9Shown = false;
    this.isQuery10Shown = false;
    this.isQuery11Shown = false;
    this.isQuery12Shown = true;
  }

}
