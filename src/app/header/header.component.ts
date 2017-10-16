import {Component, OnInit} from '@angular/core';
import {SearchService} from '../common/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public searching: boolean;

  public constructor(
    private _searchService: SearchService
  ) { }

  public ngOnInit(): void {
    this._searchService.results$.subscribe((res: any) => this.searching = false);
  }

  public search(searchTerm: string): void {
    this.searching = true;
    this._searchService.search(searchTerm);
  }
}
