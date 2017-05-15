import { Component, OnInit } from '@angular/core';
import { HighScoreService } from '../highscore.service';

@Component({
  selector: 'app-high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.css']
})
export class HighScoresComponent implements OnInit {
  public scores = [];

  constructor(private _highScoreService: HighScoreService) { }

  ngOnInit() {
    this.updateScores();
    this.listenForNewScores();
  }

  updateScores() {
    this._highScoreService.index().subscribe((scores) => this.scores = scores);
  }

  listenForNewScores() {
    this._highScoreService.scoreCreated$.subscribe(()=> {
      console.log("We are listening");
      this.updateScores();
    });
  }

}
