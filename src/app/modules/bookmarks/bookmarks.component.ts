import { Component, OnInit, Input } from '@angular/core';
import { Bookmarks } from '../../services/bookmarks';
import { DatosService } from '../../services/datos.service';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-bookmarks',
    templateUrl: './bookmarks.component.html',
    styleUrls: ['./bookmarks.component.scss'],
    imports: [
        NgFor,
        NgIf,
        FormsModule,
        UpperCasePipe,
    ],
})
export class BookmarksComponent implements OnInit {
  // TODO modo edicion
  editMode: boolean | undefined;

  // variable bookmarks
  bookmarks: Bookmarks[] | undefined;

  constructor(public datosService: DatosService) {}

  ngOnInit() {
    // se obtiene el grupo mediante el servicio de datos
    this.getBookmarks();

    // TODO modo edicion
    this.editMode = false;
  }

  /**
   * Obtener bookmarks subscribiendose al servicio
   */
  getBookmarks(): Bookmarks[] {
    this.bookmarks = this.datosService.getBookmarks();
    return this.bookmarks;
  }

  /**
   * Permite cambiar a modo edicion
   */
  changeEditMode(): void {
    if (this.editMode) {
      this.editMode = false;
    } else {
      this.editMode = true;
    }
  }
}
