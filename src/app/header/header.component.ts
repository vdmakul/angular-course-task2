import {Component, OnInit} from '@angular/core';
import {SearchService} from '../common/services/search.service';
import {ResultsService} from '../common/services/results.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public searching: boolean;

  public constructor(
    private _searchService: SearchService,
    private _resultService: ResultsService
  ) { }

  public ngOnInit(): void {
    this._resultService.results().subscribe((res: any) => this.searching = false);
  }

  public search(searchTerm: string): void {
    this.searching = true;
    this._searchService.search(searchTerm);
  }
}
