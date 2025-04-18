import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
@Component({
  selector: 'app-targets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './targets.component.html',
  styleUrl: './targets.component.css'
})
export class TargetsComponent {
  constructor(private router: Router) {}
  highScore: number = 0;

  timeLeft: number = 10;
  interval: any;
  gameOn : boolean = true;
  

  ngOnInit(): void {
    const savedHighScore = localStorage.getItem('aimTrainerHighScore');
  if (savedHighScore) {
    this.highScore = parseInt(savedHighScore, 10);
  }
    this.startTimer();
    this.changePos();
  }
  ngDoCheck(): void {
    console.log('Change detection running');
    if (this.timeLeft == 0) {
      this.gameOn = false;
    }
  }
  
  gameEnd() {
    this.gameOn = true;
    if (this.counter > this.highScore) {
      this.highScore = this.counter;
      localStorage.setItem('aimTrainerHighScore', this.highScore.toString());
    }
  }

  startTimer() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.gameEnd();
      }
    }, 1000);
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
  }
  startGame(): void {
    this.timeLeft = 10; // or whatever time you want
    this.counter = 0;
    this.gameOn = true;
    this.changePos(); // to reposition the target immediately
    this.startTimer();
    console.log("START GAME WORKS");
  }
  
  goToHome() : void {
    this.router.navigate(['/']);
    console.log("GO TO HOME WORKS");
   }
}



