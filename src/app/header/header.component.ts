import {Component} from '@angular/core';
import {SearchService} from '../common/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public constructor(
    private _searchService: SearchService
  ) { }

  public search(searchTerm: string): void {
    this._searchService.search(searchTerm);
  }
}
