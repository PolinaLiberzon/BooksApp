import { Text } from 'react-native';
import React, { Component } from 'react';
import { genres, ingredients } from './dataArrays';

export function getgenreById(genredId) {
  let genre;
  genres.map(data => {
    if (data.id == genreId) {
      genre = data;
    }
  });
  return genre;
}

export function getGenreIMG(genredId) {
  let url;
  genres.map(data => {
    if (data.id == genredId) {
      url = data.photo_url;
    }
  });
  return url;
}


export function getGenreName(genredId) {
  let name;
  genres.map(data => {
    if (data.id == genredId) {
      name = data.name;
    }
  });
  return name;
}


export function NumberOfBooksGenres(genreId) {
  let count = 0;
  genres.map(data => {
    if (data.id == genreId) {
      count++;
    }
  });
  return count;
}

export function getGenres(genreId) {
  const GenresArray = [];
  Genres.map(data => {
    if (data.genreId == genreId) {
      GenresArray.push(data);
    }
  });
  return GenresArray;
}

// modifica
// export function getGenresByIngredient(ingredientId) {
//   const GenresArray = [];
//   Genres.map(data => {
//     data.ingredients.map(index => {
//       if (index[0] == ingredientId) {
//         GenresArray.push(data);
//       }
//     });
//   });
//   return GenresArray;
// }


// export function getAllIngredients(idArray) {
//   const ingredientsArray = [];
//   idArray.map(index => {
//     ingredients.map(data => {
//       if (data.ingredientId == index[0]) {
//         ingredientsArray.push([data, index[1]]);
//       }
//     });
//   });
//   return ingredientsArray;
// }

// // functions for search
// export function getGenresByIngredientName(ingredientName) {
//   const nameUpper = ingredientName.toUpperCase();
//   const GenresArray = [];
//   ingredients.map(data => {
//     if (data.name.toUpperCase().includes(nameUpper)) {
//       // data.name.yoUpperCase() == nameUpper
//       const Genres = getGenresByIngredient(data.ingredientId);
//       const unique = [...new Set(Genres)];
//       unique.map(item => {
//         GenresArray.push(item);
//       });
//     }
//   });
//   const uniqueArray = [...new Set(GenresArray)];
//   return uniqueArray;
// }

// export function getGenresBygenreName(genreName) {
//   const nameUpper = genreName.toUpperCase();
//   const GenresArray = [];
//   genres.map(data => {
//     if (data.name.toUpperCase().includes(nameUpper)) {
//       const Genres = getGenres(data.id); // return a vector of Genres
//       Genres.map(item => {
//         GenresArray.push(item);
//       });
//     }
//   });
//   return GenresArray;
// }

// export function getGenresByGenreName(GenreName) {
//   const nameUpper = GenreName.toUpperCase();
//   const GenresArray = [];
//   Genres.map(data => {
//     if (data.title.toUpperCase().includes(nameUpper)) {
//       GenresArray.push(data);
//     }
//   });
//   return GenresArray;
// }
