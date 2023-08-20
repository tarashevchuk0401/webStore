import { Component } from '@angular/core';

const ROWS_HEIGHT: { [id: number]: number } = {
  1: 400,
  3: 335,
  4: 350,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cols: number = 3;
  category: string | undefined;
  rowHieght = ROWS_HEIGHT[this.cols];

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHieght = ROWS_HEIGHT[this.cols]
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
