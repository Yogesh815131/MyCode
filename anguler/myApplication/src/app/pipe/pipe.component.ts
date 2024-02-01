import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  info = "Pipes are a way to format, filter, and manipulate data in Angular templates. They are functions that take an input value and return a transformed value. Pipes are useful because they allow you to change the appearance of data without modifying the underlying data source"

  date = new Date();  

  tableDate = [
    {
      name:"Yogesh",
      contact:"9552001608",
      city:"Mumbai"
    },
    {
      name:"Kajal",
      contact:"955200135",
      city:"jalgaon"
    },
    {
      name:"Sagar",
      contact:"8962001608",
      city:"thane"
    },
    {
      name:"pooja",
      contact:"8962013608",
      city:"nashik"
    },
    {
      name:"Bhushan",
      contact:"8962020608",
      city:"pune"
    },
    {
      name:"girish",
      contact:"8963001608",
      city:"pune"
    }
  ]
}
