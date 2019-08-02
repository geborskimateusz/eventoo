import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventOverviewComponent } from './event/event-overview/event-overview.component';
import { EventService } from './event.service';
import { EventLocalizationDialogComponent } from './event/event-overview/event-localization-dialog/event-localization-dialog.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
    declarations: [
        PaginationComponent,
        EventOverviewComponent,
        EventLocalizationDialogComponent,
    ],
    providers: [
        EventService
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        LeafletModule.forRoot()
    ],
    exports: [
        PaginationComponent,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        EventOverviewComponent,
    ],
    entryComponents: [
        EventLocalizationDialogComponent
    ]
})
export class SharedModule { }