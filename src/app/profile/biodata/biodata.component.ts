import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.component.html',
  styleUrls: ['./biodata.component.css']
})
export class BiodataComponent implements OnInit {
  user_details: any = {}
  constructor() { }

  ngOnInit() {
  }

}
