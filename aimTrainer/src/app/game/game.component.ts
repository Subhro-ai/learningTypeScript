import { Component } from '@angular/core';
import { TargetsComponent } from './targets/targets.component';
import { CounterComponentComponent } from './counter-component/counter-component.component';
@Component({
  selector: 'app-game',
  standalone: true,
  imports: [TargetsComponent, CounterComponentComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

}
