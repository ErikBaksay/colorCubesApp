import { NgModule } from '@angular/core';

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";

const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatCheckboxModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
