import { NgModule } from "@angular/core";
import { DragDropModule } from '@angular/cdk/drag-drop';

import {
    MatButtonModule, MatDialogModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTabsModule, MatStepperModule, MatAccordion, MatProgressSpinnerModule, MatMenuModule, MatTableModule, MatRadioModule, MatSnackBarModule
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatDialogModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTabsModule, MatStepperModule, DragDropModule, MatProgressSpinnerModule, MatMenuModule, MatTableModule, MatRadioModule, MatSnackBarModule],

    exports: [MatButtonModule, MatDialogModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTabsModule, MatStepperModule, DragDropModule, MatProgressSpinnerModule, MatMenuModule, MatTableModule, MatRadioModule, MatSnackBarModule]
})
export class MaterialModule { }