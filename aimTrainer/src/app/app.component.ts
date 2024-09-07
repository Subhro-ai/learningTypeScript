import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TargetsComponent } from "./targets/targets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TargetsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aimTrainer';
}
