import { BookComponent } from './book.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EventResolver } from '../../shared/event.resolver';

const routes: Routes = [
    {
        path: ':id', component: BookComponent,
        resolve: {
            event: EventResolver
        },
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookRoutingModule { }