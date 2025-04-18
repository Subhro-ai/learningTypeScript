import { Component } from '@angular/core';
import { TargetsComponent } from './targets/targets.component';
@Component({
  selector: 'app-game',
  standalone: true,
  imports: [TargetsComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

}
