import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();
  instagramUrl = 'https://www.instagram.com/fatisemijoias/';
  whatsappUrl = 'https://wa.me/+5511992528769';
  emailUrl = 'mailto:fatisemijoias@gmail.com';
}
