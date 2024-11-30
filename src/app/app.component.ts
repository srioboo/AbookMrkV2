import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { BookmarksComponent } from './modules/bookmarks/bookmarks.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        HeaderComponent,
        MenuComponent,
        BookmarksComponent,
        RouterOutlet,
    ],
})
export class AppComponent {
  title = 'AbookMrkV2';
}
