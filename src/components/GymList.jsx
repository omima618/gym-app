import Card from './Card';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';
const GymList = () => {
    const { gyms, paginate } = useSelector((state) => state.gyms);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(8);
    const indexOfLastPage = currentPage * cardsPerPage;
    const indexOfFirstPage = indexOfLastPage - cardsPerPage;
    const currentCards = [...gyms].slice(indexOfFirstPage, indexOfLastPage);

    useEffect(() => {
        setCurrentPage(paginate);
    }, [paginate]);
    return (
        <div className="container">
            <h2 className="my-5">All</h2>
            {gyms.length > 0 && (
                <>
                    <div className="row mb-5">
                        {gyms.length > 0 &&
                            currentCards.map((gym) => {
                                return (
                                    <div
                                        className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                                        key={gym.id}
                                    >
                                        <Card data={gym} />
                                    </div>
                                );
                            })}
                    </div>
                    <Pagination
                        totalCards={gyms.length}
                        cardsPerPage={cardsPerPage}
                    />
                </>
            )}
        </div>
    );
};

export default GymList;
