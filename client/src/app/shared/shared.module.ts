import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        PaginationComponent],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        PaginationComponent,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }