import { NgModule } from "@angular/core";
import {
    MatButtonModule, MatDialogModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTabsModule
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatDialogModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTabsModule],
    exports: [MatButtonModule, MatDialogModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTabsModule]
})
export class MaterialModule {}