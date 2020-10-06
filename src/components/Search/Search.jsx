import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import {SearchContainer} from  './styled'

const Search = (props) => {
    return (
        <SearchContainer>
            <FormControl>
                <TextField
                    placeholder={"Search"}
                    variant="outlined" 
                   
                    labelWidth={70}
                    margin={"normal"}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon color={"action"}/>
                            </InputAdornment>
                        )
                }}
                />
        </FormControl>
      </SearchContainer>
    );
}
 
export default Search;