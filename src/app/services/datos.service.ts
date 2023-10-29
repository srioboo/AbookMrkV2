import { Injectable, EventEmitter, Input } from '@angular/core';
import { Bookmarks } from './bookmarks';
import { BOOKMARKS } from './mock-bookmarks';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private messageService: MessageService) {}

  bookmarks: Bookmarks[] | undefined;

  /**
   * Obtecion de los bootmarks desde el observable para poder usarlo
   * fuera de aqui, tambien manda un mensaje
   */
  getBookmarks() { //: Observable<Bookmarks[]> {
    this.messageService.add('DatosService: fetched datos');

    if (typeof this.bookmarks === 'undefined') {
      this.bookmarks = BOOKMARKS;
    }

    return (this.bookmarks);
  }

  /**
   * Marca el seleccionado
   * @param bkGrp
   */
  setBookmarkSelected(bkGrp: Bookmarks) {

    if (bkGrp === null) {
      this.bookmarks = BOOKMARKS;
    } else {
      // @ts-ignore
      this.bookmarks = [BOOKMARKS[bkGrp.id]];
    }
  }

}
