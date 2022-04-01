import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import "./Favorites.css";
import Card from "./Card";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle } from "../firebaseConfig";

const Favorites = () => {
  const { user } = useContext(AuthContext);
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="Favorites">
      {user ? (
        favorites.map((favorite) => (
          <Card singleGif={favorite} key={favorite.id} />
        ))
      ) : (
        <button onClick={signInWithGoogle}>Sign In</button>
      )}
    </div>
  );
};

export default Favorites;
