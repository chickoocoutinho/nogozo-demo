import {styled} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const Div= styled('label')({
    width: '100%',
    backgroundColor: '#fff',
    padding: '5px',
    display: 'grid',
    gridTemplateColumns: '25px auto',
    gridColumnGap: '10px',
    marginBottom: '10px',
    '& input':{
        border: 'none',
        outline: 'none',
        '&:focus':{
            border: 'none',
            outline: 'none',
        }
    }
});

const SearchBox = () => {
    return (
        <Div for='searchBar'>
            <SearchIcon/>
            <input placeholder='Search Items' label='search bar' id="searchBar"/>
        </Div>
    );
}

export default SearchBox;