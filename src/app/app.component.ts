import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {$localize} from '@angular/localize/init';
import { BannerComponent } from "./banner/banner.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = $localize`:Title for the app:Welcome to our application!`;
  welcomeMessage: string = $localize`Welcome to our localized app!`;
}
