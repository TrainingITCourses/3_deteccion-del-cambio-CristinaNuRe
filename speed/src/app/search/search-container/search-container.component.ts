import { Component, OnInit } from '@angular/core';
import { CriteriaListComponent } from '../criteria-list/criteria-list.component';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onSearch(searchParams: {criteria: string, text: string}) {
    console.log(`Criteria: ${searchParams.text} ${searchParams.criteria}`);
  }

}
