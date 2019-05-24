import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind-assignment',
  templateUrl: './data-bind-assignment.component.html',
  styleUrls: ['./data-bind-assignment.component.css']
})
export class DataBindAssignmentComponent implements OnInit {
  username='test';
  buttonStatus=false;
  constructor() { 
    this.username='';
  }

  ngOnInit() {
  }

  CheckStringLength(event: any){
    debugger;
    if(this.username.length>0){
    this.buttonStatus=true;
  }
  }

  ClearForm(event: any){
    debugger;
    this.username='';
  }

}
