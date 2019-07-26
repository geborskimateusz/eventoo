import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookRoutingModule } from './book-routing-module';

@NgModule({
    declarations: [
        BookComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        BookRoutingModule
    ],
    entryComponents: [
        
    ]
})
export class BookModule {}