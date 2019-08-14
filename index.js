// Exercise 1
// Create a Movie class. Make all the following attributes: movieName, rating, and yearReleased.
// Create three different methods to change each attribute. Outside of the class create two different Movie objects,
// assign values to each object, and print them to the console.
//
class Movie{
    constructor(movieName, rating, yearReleased){
        this.movieName = movieName;
        this.rating = rating;
        this.yearReleased = yearReleased;
    }
         //method 1
            changeMovieTitle(title)
        {
            this.movieName = title;
        }

         //method 2
        changeRating(change)
        {
            this.rating = change;
        }
        //method 3
        changeYearOfRelease(differentYear){
                this.yearReleased = differentYear;
        }
}
// create two different Movie objects. You created one called movie 
let movie = new Movie ("Die Hard", "PG 16", "1990");
console.log(movie);
//object 1
movie.changeMovieTitle("Braddock");
console.log(movie);
//object 2 - this is not another object, you are update the original object movie
movie.changeRating("Adult");
console.log(movie);


//     Exercise 2
// Create a class Product that represents a product sold online. A product has a price, quantity and name.
//
//     The class should have:
//
//     A constructor to hold the values.
//     A method printProduct() that prints a product in the following form: Banana, price 1.1, amount 13

// class Product{
//     constructor(price, quantity, name){
//         this.price = price;
//         this.quantity = quantity;
//         this.name = name;
//     }
//     printProd(){
//         console.log(this.name, this.price, this.quantity);
//     }
// }
//
// let differentProduct = new Product("$30.00", "12", "T-Shirts");
// console.log(differentProduct);
// differentProduct.("Banana");
// console.log(differentProduct);