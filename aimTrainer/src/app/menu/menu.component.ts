import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router: Router) {}
  highScore: number = 0;

  ngOnInit(): void {
    const savedHighScore = localStorage.getItem('aimTrainerHighScore');
    if (savedHighScore) {
      this.highScore = parseInt(savedHighScore, 10);
    }
  }
  startGame() {
    this.router.navigate(['/game']);
    console.log('Game started');
  }
}
