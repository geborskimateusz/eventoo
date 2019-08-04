import { NgModule } from "@angular/core";
import {DragDropModule} from '@angular/cdk/drag-drop';

import {
    MatButtonModule, MatDialogModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTabsModule, MatStepperModule, MatAccordion
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatDialogModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTabsModule, MatStepperModule, DragDropModule],

    exports: [MatButtonModule, MatDialogModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTabsModule, MatStepperModule, DragDropModule]
})
export class MaterialModule {}