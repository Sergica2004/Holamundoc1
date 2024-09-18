import { Component } from '@angular/core';
import { PaginaComponent } from './pages/pagina/pagina.component';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PaginaComponent],
  template: `<app-pagina></app-pagina>`,
})

export class AppComponent{}



