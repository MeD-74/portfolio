import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
})
export class ContactComponent {
  formData = {
    name: '',
    message: '',
  };

  onSubmit() {
    console.log('Form Submitted!', this.formData);
    alert('Thanks for Contacting me , i will  call you ASAP! ');
    this.formData = { name: '', message: '' };
  }
}
