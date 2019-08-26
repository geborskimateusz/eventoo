import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventOverviewComponent } from './event/event-overview/event-overview.component';
import { EventService } from './event.service';
import { EventLocalizationDialogComponent } from './event/event-overview/event-localization-dialog/event-localization-dialog.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { PaginationService } from './pagination/pagination.service';
import { UtilEffects } from './util/util-store/util.effects';
import { EffectsModule } from '@ngrx/effects';
import { BookComponent } from './book/book.component';
import { UnderDevelopmentComponent } from './under-development/under-development.component';
import { StoreModule } from '@ngrx/store';
import { uiReducers } from './ui-store/ui.reducers';


@NgModule({
    declarations: [
        PaginationComponent,
        EventOverviewComponent,
        EventLocalizationDialogComponent,
        BookComponent,
        UnderDevelopmentComponent
    ],
    providers: [
        EventService,
        PaginationService
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        LeafletModule.forRoot(),
        // StoreModule.forRoot(uiReducers),
        EffectsModule.forFeature([UtilEffects])
    ],
    exports: [
        PaginationComponent,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        EventOverviewComponent,
        BookComponent,
        UnderDevelopmentComponent
    ],
    entryComponents: [
        EventLocalizationDialogComponent
    ]
})
export class SharedModule { }