import { Component, OnInit } from '@angular/core';
import {SearchService} from '../common/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public constructor(
    private _searchService: SearchService
  ) { }

  public test(): string {
    return this._searchService.test();
  }

  ngOnInit() {
  }

}
