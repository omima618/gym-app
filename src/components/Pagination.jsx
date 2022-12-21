import { useDispatch, useSelector } from 'react-redux';
import { gymActions } from '../app/features/gymSlice';
const Pagination = ({ cardsPerPage, totalCards }) => {
    const dispatch = useDispatch();
    const { paginate } = useSelector((state) => state.gyms);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a
                        onClick={() =>
                            dispatch(gymActions.setPaginate(paginate - 1))
                        }
                        className={`${
                            paginate === 1 && 'disabled'
                        } page-link main-color`}
                        href="#"
                    >
                        Previous
                    </a>
                </li>
                {pageNumbers.map((num) => {
                    return (
                        <li key={num} className="page-item">
                            <a
                                onClick={() =>
                                    dispatch(gymActions.setPaginate(num))
                                }
                                href="!#"
                                className="page-link main-color"
                            >
                                {num}
                            </a>
                        </li>
                    );
                })}
                <li className="page-item">
                    <a
                        onClick={() =>
                            dispatch(gymActions.setPaginate(paginate + 1))
                        }
                        className={`${
                            paginate === Math.ceil(totalCards / cardsPerPage) &&
                            'disabled'
                        } page-link main-color`}
                        href="#"
                    >
                        Next
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
