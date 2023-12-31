import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private numberOfNotes = new BehaviorSubject<number>(0)
  currentNotes = this.numberOfNotes.asObservable()
  // numberOfNotes:number = 0
  notes:any[] = []
  counter:any = 1

  constructor() {
    this.getData()
  }

  private updateNumberOfNotes(newNumber:number) {
    localStorage.setItem('0', newNumber + '')
  }

  public clearAll() {
    localStorage.clear()
  }

  edit(value: number) {
    this.numberOfNotes.next([
      ...this.numberOfNotes.value,
      {

      }
    ])
  }

  public getNumberOfNotes() {
    if(localStorage.getItem('0') === null) {
      localStorage.setItem('0', '0')
    }
    this.numberOfNotes = Number(localStorage.getItem('0'))
    this.counter = this.numberOfNotes
    // console.log('inside getnumberofnotes() line 25:' + this.numberOfNotes)
    return this.numberOfNotes
  }

  public getData() {
    // this.numberOfNotes = this.getNumberOfNotes()
    if(Number(this.numberOfNotes) > 0) {

      //create for loop here till it fills out.
      console.log('Inside Service getting data')
      if(localStorage.getItem(this.counter + '') === null) {
        console.log('Didnt get any data with counter:' + this.counter)
      }

      console.log('printing out the while loop stuff underneath')
      while(this.counter > 0) {
      // while(this.counter <= this.getNumberOfNotes()) {
        console.log(this.counter + ":" + localStorage.getItem(this.counter + ''))
        this.notes.push(localStorage.getItem(this.counter + ''))
        this.counter-=1
      }

      this.counter = this.getNumberOfNotes()
  
    }

    return this.notes
  }

  public saveData(input:string) {
    console.log('this is the input:' + input)
    this.numberOfNotes.next(Number(this.numberOfNotes) + 1)
    this.updateNumberOfNotes(Number(this.numberOfNotes) + 1)
    localStorage.setItem(this.getNumberOfNotes() + '', input)
    
  }
}
