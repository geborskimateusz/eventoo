import { NgModule } from "@angular/core";
import {DragDropModule} from '@angular/cdk/drag-drop';

import {
    MatButtonModule, MatDialogModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTabsModule, MatStepperModule, MatAccordion, MatProgressSpinnerModule, MatMenuModule
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatDialogModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTabsModule, MatStepperModule, DragDropModule, MatProgressSpinnerModule, MatMenuModule],

    exports: [MatButtonModule, MatDialogModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTabsModule, MatStepperModule, DragDropModule, MatProgressSpinnerModule, MatMenuModule]
})
export class MaterialModule {}