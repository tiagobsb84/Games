import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-aventura',
  templateUrl: './aventura.component.html',
  styleUrls: ['./aventura.component.css']
})
export class AventuraComponent implements OnInit {

  gamer: Game[] = [];

  constructor(private gamerService: GameService) {}

  ngOnInit(): void {
    this.findAllAventura();
  }

  findAllAventura(): void {
    this.gamerService.findAll().subscribe((resposta) => {
      this.gamer = resposta.filter((game) => game.genero == 'aventura');
    })
  }
}
