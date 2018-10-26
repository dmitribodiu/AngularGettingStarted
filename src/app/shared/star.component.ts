import { OnChanges, Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    
    starWidth: number;

    constructor() {
        this.rating = 4;
    }

    ngOnChanges(): void {
        console.log('ngOnChanges');
        this.starWidth = this.rating * 75 / 5;
    }

    changeRating() {
        console.log('ratingClicked');
        this.notify.emit('clicked!');
    }
}