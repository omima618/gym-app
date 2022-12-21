import Brand from '../assets/images/footer-pic.png';
const Footer = () => {
    return (
        <footer className="main-bg py-2">
            <div className="container">
                <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
                    <img src={Brand} alt="footer" />
                    <p className='my-0 mx-4'> 
                        © 2020 ALGYM All Rights Reserved.Developed by INOVA LLC
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
