import DefaultImg from '../assets/images/default.png';
const Card = (props) => {
    return (
        props.data && (
            <>
                {
                    <div className="card pt-3 h-100 overflow-hidden rounded-4">
                        <img
                            src={props.data.logo_img_url || DefaultImg}
                            className="card-img-top mx-auto"
                            alt="gym logo"
                        />
                        <div className="card-body ">
                            <h3 className="card-text fs-3 text-center">
                                {props.data.name}
                            </h3>
                        </div>
                        {props.data.is_hot_deal && (
                            <div className="card-foot bg-success px-3 py-2 text-center fs-4 text-white">
                                Card footer
                            </div>
                        )}
                    </div>
                }
            </>
        )
    );
};

export default Card;
