import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../material.module';
import { BookComponent } from './book/book.component';
import { EventService } from './event.service';
import { EventLocalizationDialogComponent } from './event/event-overview/event-localization-dialog/event-localization-dialog.component';
import { EventOverviewComponent } from './event/event-overview/event-overview.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationService } from './pagination/pagination.service';
import { UIService } from './ui/service/ui.service';
import { UnderDevelopmentComponent } from './under-development/under-development.component';
import { UtilEffects } from './util/util-store/util.effects';


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
        PaginationService,
        UIService
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        LeafletModule.forRoot(),
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