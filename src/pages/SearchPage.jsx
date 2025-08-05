import SideNavbar from "../layout/SideNavbar";
import SearchForm from "../components/SearchForm";

import "./SearchPage.css";

const SearchPage = () => {
    return (
        <div className="SearchPage">
            <SideNavbar />
            <div className="form-container">
                <SearchForm />
            </div>
        </div>
    );
};

export default SearchPage;
