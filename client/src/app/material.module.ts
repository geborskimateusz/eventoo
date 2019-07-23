import { NgModule } from "@angular/core";
import {
    MatButtonModule, MatDialogModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatDialogModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule],
    exports: [MatButtonModule, MatDialogModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule]
})
export class MaterialModule {}