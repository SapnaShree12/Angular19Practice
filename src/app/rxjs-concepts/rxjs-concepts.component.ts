import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-concepts',
  imports: [],
  templateUrl: './rxjs-concepts.component.html',
  styleUrl: './rxjs-concepts.component.scss'
})
export class RxjsConceptsComponent {

  ngOnInit(): void {
    this.observableData();
  }
  observableData(){
let observable =new Observable<any>(Observer=>{
  Observer.next('sapna');
  Observer.error('shrees');
  Observer.complete();
});
observable.subscribe({

  next:data=>console.log(data),
  error:err=>console.log(err),
  complete:()=>console.log('completed')

  })
  }
  promiseData(){

  }

}
