import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-fps',
  templateUrl: './fps.component.html',
  styleUrls: ['./fps.component.css']
})
export class FpsComponent implements OnInit {

  gamer: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.findAllFps();
  }

  findAllFps(): void {
    this.gameService.findAll().subscribe((resposta) => {
      this.gamer = resposta.filter((game) => game.genero == 'fps');
    })
  }
}
