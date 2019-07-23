import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

@NgModule({
    declarations: [
        PaginationComponent],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        PaginationComponent,
        MaterialModule
    ]
})
export class SharedModule { }