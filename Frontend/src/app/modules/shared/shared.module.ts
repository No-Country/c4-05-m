import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { MaterialModule } from '../material/material.module';
import { Dialog1Component } from './dialog1/dialog1.component';



@NgModule({
  declarations: [
    DialogComponent,
    Dialog1Component
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    DialogComponent,
    Dialog1Component
  ]
})
export class SharedModule { }
