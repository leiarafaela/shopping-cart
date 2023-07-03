import React, {useState, useContext} from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';
import fethProducts from '../../api/fecthProdutcs';
import AppContext from '../../context/AppContext';

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');
  const {setProducts, setLoading} = useContext(AppContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    const products = await fethProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue('');

  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search__input"
        onChange={({target}) => setSearchValue(target.value)}
        required
      />

      <button type="submit" className="search__button">
        <BsSearch/>
      </button>
    </form>
  );
}

export default SearchBar;
