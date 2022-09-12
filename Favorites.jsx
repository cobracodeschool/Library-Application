import React from "react";
import "../App";
import { useAppContext } from "./context/appContext";

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log("favorites are", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className="book">
            <div className='name-container'>
              <h4 className='name-card'>{book.title}</h4>
            </div>
            <div>
              <img src={book.image_url} alt="#" className="book-list-img" />
            </div>
            <div className='all-button'>
              {favoritesChecker(book.id) ? (
                <button onClick={() => removeFromFavorites(book.id)} className="button-container">
                  <p className='button-card'>Remove</p>
                </button>
              ) : (
                <button onClick={() => addToFavorites(book)} className="button-container">
                  <p className='button-card'>Add to Favorites</p>
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h3 class="no-books">You don't have any favorite books yet!</h3>
      )}
    </div>
  );
};

export default Favorites;