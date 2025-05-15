import { Component } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs-concepts',
  imports: [],
  templateUrl: './rxjs-concepts.component.html',
  styleUrl: './rxjs-concepts.component.scss'
})
export class RxjsConceptsComponent {

  ngOnInit(): void {
    //this.observableData();
    // this.promiseData();
    // this.subjectFunction();
   // this.replaySubject();
     this.behaviourSubject();
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
let promise = new Promise((resolve,reject)=>{
  resolve('sapna');
  //reject('shrees');
});
promise.then(data=>console.log(data))
.catch(err=>console.log(err))
  }

  //subjec
  subjectFunction() {
    let subject = new Subject();

    console.log("Before subscribe - emitting 'suki'");
    subject.next('subject-suki');

    subject.subscribe({
      next: data => console.log("Subscriber received:", data)
    });

    console.log("after subscri");
    subject.next('subject-sapna');
    subject.next('subject-black');
  }

  replaySubject(){
    let replaySubject = new ReplaySubject(-1);
    replaySubject.next('suki');
    replaySubject.next('sapna');
    replaySubject.next('black');
    replaySubject.subscribe({
      next: data => console.log("Subscriber received:", data)
    });
    replaySubject.next('suki');

  }
  behaviourSubject(){
    let behaviour = new BehaviorSubject('suki')
    behaviour.next('suki');
    behaviour.next('sapna');
    behaviour.next('black');
    behaviour.subscribe({
      next: data => console.log("Subscriber received:", data)
    });
    behaviour.next('suki');

  }
}
