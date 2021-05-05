import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  EmpName = '';
  EmpNo = '';
  arr = [];
  details = {};
  Sno = 1;
  ind = 0;

  submit() {
    this.details = {
      sno: this.Sno,
      name: this.EmpName,
      no: this.EmpNo,
      ind:this.ind
    }
    this.arr.push(this.details);
    this.Sno++;
    this.ind++;
  }

  delete(ind: any) {
    this.arr.splice(ind,1);
    for(let i = ind; i < this.arr.length; i++)
    {
      this.arr[i].ind--;
      this.arr[i].sno--;
    }
  }
}