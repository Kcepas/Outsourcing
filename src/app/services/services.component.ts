import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    { name: 'Web Development', description: 'We create modern and responsive websites.' },
    { name: 'Mobile App Development', description: 'We build native iOS and Android apps.' },
    { name: 'Cloud Services', description: 'We offer scalable cloud solutions.' }
  ];
}
