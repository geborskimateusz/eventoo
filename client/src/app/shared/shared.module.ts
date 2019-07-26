import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventOverviewComponent } from './event/event-overview/event-overview.component';
import { EventService } from './event.service';

@NgModule({
    declarations: [
        PaginationComponent,
        EventOverviewComponent
    ],
    providers: [
        EventService
    ],
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
        ReactiveFormsModule,
        EventOverviewComponent,
    ]
})
export class SharedModule { }