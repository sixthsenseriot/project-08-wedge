import * as React from "react";
import Button from "@mui/material/Button";

const SearchForm = () => {
    return (
        <div className="SearchForm">
            <form action="">
                <input type="text" placeholder="Search" />
                <button type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <Button>Employment Type</Button>
                <Button>Role</Button>
                <Button>Location</Button>
                <Button>Category</Button>
                <Button>Advanced Filter</Button>
            </form>
        </div>
    );
};

export default SearchForm;
