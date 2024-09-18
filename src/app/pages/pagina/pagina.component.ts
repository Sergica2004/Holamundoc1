import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent {
  formData: {name: string, email: string}[] = [];
  
  form = {
    name: '',
    email: ''
  };

  onSubmit() {
    this.formData.push({
      name: this.form.name,
      email: this.form.email
    });

    this.form.name = '';
    this.form.email = '';
  }
}
