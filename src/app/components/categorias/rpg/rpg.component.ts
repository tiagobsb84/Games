import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.css']
})
export class RpgComponent implements OnInit {

  gamer: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.findAllRpg();
  }

  findAllRpg(): void {
    this.gameService.findAll().subscribe((resposta) => {
      this.gamer = resposta.filter(game => game.genero == 'rpg');
    })
  }
}
