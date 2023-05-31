import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <input type='text' placeholder='Search for articles..' />
      <button className='submit-search-btn'>SEARCH</button>
    </div>
  )
}

export default SearchBar;