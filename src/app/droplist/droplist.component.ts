import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-droplist',
  templateUrl: './droplist.component.html',
  styleUrls: ['./droplist.component.css'],
})
export class DroplistComponent implements OnInit {
  constructor() {}

  tiles: Array<{ id: string; url: string }> = [];

  pair: Array<string> = [];

  win: boolean = false;

  swapTiles() {
    let tile1 = document.getElementById(this.pair[0]) as HTMLElement;
    let tile2 = document.getElementById(this.pair[1]) as HTMLElement;
    let tempID: string | undefined = tile1.id;

    tile1.setAttribute('id', tile2.id);
    tile1.setAttribute(
      'src',
      '../../assets/puzzle1_imgs/puzzle1_imgs/img' + tile2.id + '.jpg'
    );
    tile2.setAttribute('id', tempID);
    tile2.setAttribute(
      'src',
      '../../assets/puzzle1_imgs/puzzle1_imgs/img' + tempID + '.jpg'
    );
  }

  checkOrder():boolean {
    let containerElements = document.getElementById('gameContainer')?.childNodes as NodeListOf<Element>;
    
    console.log("container length = " + containerElements.length);
    
    for (let index = 0; index < 9; index++) {
      console.log(containerElements[index].id);
      console.log("in for loop");
      
      
      
      if((index + 1).toString() != containerElements[index].id){
        
        console.log("tusch");
        
        return false;
      } 
    }
    console.log("game won");
    return true;
  }

  onClick(event: any) {
    this.pair.push(event.target.id);
    let clicked = document.getElementById(event.target.id);
    clicked?.classList.add("clicked");
    if (!this.win) {
      if (this.pair.length == 2) {
        clicked?.classList.remove("clicked");
        document.getElementById(this.pair[0])?.classList.remove("clicked");
        this.swapTiles();
        this.win = this.checkOrder();
        this.pair = [];
      }
    }
  }

  shuffle() {
    this.tiles.sort(function () {
      return 0.5 - Math.random();
    });
  }

  restart(){
    this.shuffle();
    this.win = false;
  }

  ngOnInit(): void {
    for (let index = 1; index < 10; index++) {
      let tempurl: string =
        '../../assets/puzzle1_imgs/puzzle1_imgs/img' +
        index.toString() +
        '.jpg';
      this.tiles.push({ id: index.toString(), url: tempurl });
    }
    this.shuffle();
  }
}
