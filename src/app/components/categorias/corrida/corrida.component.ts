import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-corrida',
  templateUrl: './corrida.component.html',
  styleUrls: ['./corrida.component.css']
})
export class CorridaComponent implements OnInit {

  gamer: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.findAllCorrida();
  }

  findAllCorrida(): void {
    this.gameService.findAll().subscribe((resposta) => {
      this.gamer = resposta.filter(game => game.genero == 'corrida');
    })
  }
}
