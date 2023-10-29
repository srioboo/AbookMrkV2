import { Component } from '@angular/core';
//import { BOOKMARKS } from '../mock-bookmarks';
import { Bookmarks } from 'src/app/services/bookmarks';
import { DatosService } from 'src/app/services/datos.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  /** asingamos constantes */
  bookmarks: Bookmarks[] | undefined;

  /** creamos variable de tipo grupo */
  grupoSelected: Bookmarks | undefined;

  constructor(private datosService: DatosService) { }

  ngOnInit() {
    // mostramos el seleccionado, al inicio no hay ninguno
    this.getBookmarks();

    // seleccionado por defecto
    this.grupoSelected = undefined;
  }

  getBookmarks() {
    this.bookmarks = this.datosService.getBookmarks();
    return this.bookmarks;
  }

  /** Permite detecar el filtro al ser pulsado */
  onSelectBkGrp(bkGrp: Bookmarks): void {
    if (bkGrp === null) {
      this.datosService.setBookmarkSelected(bkGrp);
    } else {
      this.datosService.setBookmarkSelected(bkGrp);
    }
    this.grupoSelected = bkGrp;
  }

  protected readonly Bookmarks = Bookmarks;
}
