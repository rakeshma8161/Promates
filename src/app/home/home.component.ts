import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BannerComponent } from '../banner/banner.component';
import { FooterComponent } from "../footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { FreqAskedQueComponent } from "../freq-asked-que/freq-asked-que.component";
import { FeedbackComponent } from "../feedback/feedback.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BannerComponent, FooterComponent, FreqAskedQueComponent, FeedbackComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
