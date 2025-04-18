import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameComponent } from "./game/game.component";
import { MenuComponent } from './menu/menu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aim Trainer';
}
