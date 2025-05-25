import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  // Метод за испраќање на формата
  onSubmit(contactForm: any) {
    if (contactForm.invalid) {
      alert('Please fill out all required fields correctly.');
      return;
    }

    const templateParams = {
      from_name: this.contactData.name,
      from_email: this.contactData.email,
      message: this.contactData.message
    };

    emailjs.send('service_izja6ip', 'template_j1168bv', templateParams, 's38qxqRH8fUTw_Pkr')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
      }, (error) => {
        console.error('FAILED...', error);
        alert('Failed to send your message. Please try again later.');
      });
      contactForm.reset();
  }
}
