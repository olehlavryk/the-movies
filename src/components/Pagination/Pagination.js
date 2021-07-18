import React from "react";
import { useSelector } from "react-redux";
import { currentPageSelector, themeSelector, totalSelector } from "src/store/selectors";
import "./Pagination.css";

const Pagination = ({ loadHandler, url }) => {
    const theme = useSelector(themeSelector);
    const currentPage = useSelector(currentPageSelector);
    const total = useSelector(totalSelector);

    const prevButtonProps = currentPage === 1 ? { disabled: "disabled" } : {};
    const nextButtonProps = currentPage === total ? { disabled: "disabled" } : {};

    return (
        <div className={`pagination theme-${theme}`}>
            <div>Current page {currentPage}</div>
            <div className="btn-group">
                <button
                    className="prevBtn"
                    onClick={() => loadHandler(`${url}&page=${currentPage - 1}`)}
                    {...prevButtonProps}
                >
                    Previous page
                    </button>
                <button
                    className="nextBtn"
                    onClick={() => loadHandler(`${url}&page=${currentPage + 1}`)}
                    {...nextButtonProps}
                >
                    Next page
                    </button>
            </div>
        </div>
    )
}

export default Pagination