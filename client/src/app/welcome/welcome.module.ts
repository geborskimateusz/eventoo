import { NgModule } from "@angular/core";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './main/about/about.component';
import { FeaturesComponent } from './main/features/features.component';
import { ToursComponent } from './main/tours/tours.component';
import { StoriesComponent } from './main/stories/stories.component';
import { BookComponent } from './main/book/book.component';
import { TourDialog } from './main/tours/tour-dialog/tour-dialog';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { CommonModule } from '@angular/common';
import { StoriesExpandedDialog } from './main/stories/stories-expanded/stories-expanded-dialog';

@NgModule({
    declarations: [
      WelcomeComponent,
      NavbarComponent,
      FooterComponent,
      HeaderComponent,
      MainComponent,
      AboutComponent,
      FeaturesComponent,
      ToursComponent,
      StoriesComponent,
      BookComponent,
      TourDialog,
      StoriesExpandedDialog
    ],
    imports: [
      WelcomeRoutingModule,
      CommonModule
    ],
    entryComponents: [TourDialog, StoriesExpandedDialog]
  })
export class WelcomeModule {}