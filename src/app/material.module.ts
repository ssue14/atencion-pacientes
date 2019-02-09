import {NgModule} from '@angular/core';
import {MatBadgeModule, MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    MatBadgeModule,
    MatButtonModule
  ],
  exports: [
    MatBadgeModule,
    MatButtonModule
  ],
  providers: []
})
export class MaterialModule {
}
