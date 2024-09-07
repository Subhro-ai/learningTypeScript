import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';  
import { timer } from 'rxjs';
@Component({
  selector: 'app-targets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './targets.component.html',
  styleUrl: './targets.component.css'
})
export class TargetsComponent {
  timeLeft: number = 10;
  interval: any;
  gameOn : boolean = true;
  

  ngOnInit(): void {
    this.startTimer();
  }
  ngDoCheck(): void {
    console.log('Change detection running');
    if (this.timeLeft == 0) {
      this.gameOn = false;
    }
  }
  
  gameEnd() {
    this.gameOn = true;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
    if (this.timeLeft == 0) {
      this.gameEnd();
    }
  }
  counter: number = 0;
  x : string = '100px';
  y : string = '100px';
  temp : Number = 0 ;
  targetStyle = {
    'left' : this.x,
    'top' : this.y,
  }

  changePos() {
    this.temp = Math.floor(Math.random()*980)
    this.x = this.temp + 'px';
    this.temp = Math.floor(Math.random()*620)
    this.y = this.temp+'px';
    console.log("CHANGE POS WORKS");
    this.targetStyle = {
      'left' : this.x,
      'top' : this.y,
    }
  }
  onClick() {
    this.changePos();
    this.counter += 1;
    console.log("on click WORKS");
  }
}
