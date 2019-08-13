import { NgModule } from "@angular/core";
import {DragDropModule} from '@angular/cdk/drag-drop';

import {
    MatButtonModule, MatDialogModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTabsModule, MatStepperModule, MatAccordion, MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatDialogModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTabsModule, MatStepperModule, DragDropModule, MatProgressSpinnerModule],

    exports: [MatButtonModule, MatDialogModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTabsModule, MatStepperModule, DragDropModule, MatProgressSpinnerModule]
})
export class MaterialModule {}