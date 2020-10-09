import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import {SearchContainer} from  './styled'

const Search = (props) => {
    return (
        <SearchContainer>
            <FormControl >
                <TextField
                    placeholder={"Search"}
                    variant="outlined" 
                    margin={"normal"}
                    name={'text'}
                    value={props.value}
                    onChange={props.change}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton onClick={props.submit}>
                                    <SearchIcon color={"action"}/>
                                </IconButton>
                            </InputAdornment>
                        )
                }}
                />
        </FormControl>
      </SearchContainer>
    );
}
 
export default Search;