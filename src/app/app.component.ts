import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit {
  title = 'Star Wars API Search';
  swapiSearch: FormGroup; // User search for fetch

  // This is for fetch
  baseUrl: string = `https://swapi.co/api/`;
  category: string = ''; // Handles the category selector part of the url 
  Url: string = `${this.baseUrl}${this.category}/?search=${this.swapiSearch}`;

  searchData: any = []; // Handles returned fetch data


  /*********************
   * Initialization 
  *********************/
 constructor(private fb: FormBuilder ) {
 }


 ngOnInit() {
   this.swapiSearch = this.fb.group({
     userSearch: new FormControl()

   });

 }

 
 



  /*********************
   * Functions 
  *********************/
    // Functions handling the category selector
  clickPeople() {
    this.category = "people";
    console.log(this.category);
  }
  clickShips() {
    this.category = "starships";
    console.log(this.category);
  }
  clickFilms() {
    this.category = "films";
    console.log(this.category);
  }

}

