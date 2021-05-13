import { createContext, useState } from 'react';

const FavoritesContext =  createContext({
    favorites: [],
    totalFavorites: 0
});

function FavoritesContextProvider(props) {

   const [useFavorites, setUserFavorites] = useState([]);

    const context = {
        favorites: useFavorites,
        totalFavorites: userFavorites.length,
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}