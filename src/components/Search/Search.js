import "./Search.css";

const Search = ({ fulldata, setListData }) => {

    const handleInput = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        //it is giving the entire array of fulldata when the search is empty it should give empty array then why?
        const filteredData = fulldata.filter(data => data.first.toLowerCase().includes(searchTerm) || data.last.toLowerCase().includes(searchTerm));
        setListData(filteredData);
    }

    return (
        <div className="main_search_container">
            <div className="heading">
                <h3>List View</h3>
            </div>
            <div className="input_container">
                <input type="text" placeholder="search users" onInput={handleInput} className="input_box" />
            </div>
        </div>
    )
}

export default Search;