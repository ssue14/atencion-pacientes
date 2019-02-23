  import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() SideNavigationToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Method to open the left sidenav when the user click the link
   */
  onToggleOpenSideNav() {
    this.SideNavigationToggle.emit();
  }
}
