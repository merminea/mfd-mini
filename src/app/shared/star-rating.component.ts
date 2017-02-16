
import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

//start as a function, then an object, that's why ({})
@Component({
    selector: 'star-rating',
    templateUrl: './app/shared/star-rating.component.html',
    styles: [`
        .star-rating {
            font-size: 0;
            white-space: nowrap;
            display: inline-block;
            margin: 12px;
            width: 72px;
            height: 12px;
            overflow: hidden;
            position: relative;
            background: url("app/assets/images/star.svg");
            background-size: contain;
        }
        .crop { overflow: hidden; }
        div { cursor: pointer;}
    `]
})

export class StarRatingComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 12; //multiply the rating with the width of the stars
    }

    /*onClick():void{
        this.ratingClicked.emit(`Hey I've been clicked ${this.rating}`);
    }*/
}