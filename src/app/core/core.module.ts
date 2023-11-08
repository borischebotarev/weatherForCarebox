import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "@core/components/header/header.component";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    HeaderComponent
  ]
})
export class CoreModule {}
