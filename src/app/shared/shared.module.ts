import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../components/title/title.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ZoomInDirective } from '../directives/zoom-in.directive';

const components = [TitleComponent, SearchBarComponent];

const modules = [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  NgxPaginationModule,
  FontAwesomeModule,
];

@NgModule({
  declarations: [components, ZoomInDirective],
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [components, modules, ZoomInDirective],
})
export class SharedModule {}
