import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  @Output() CloseSideNavigation = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Method to close the left sidenav when the user click the link
   */
  onToggleCloseSideNav(){
    this.CloseSideNavigation.emit();
  }

}
