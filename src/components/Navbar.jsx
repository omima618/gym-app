import './Navbar.css';
import Logo from '../assets/images/logo.png';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg mb-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav w-100">
                        <div className="w-100 px-5  d-flex flex-column justify-content-center flex-lg-row justify-content-lg-between align-items-center">
                            <div className="navbar__middle d-block d-lg-flex g-3">
                                <a
                                    className="nav-link main-color active fw-bold"
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </a>
                                <a
                                    className="nav-link main-color px-lg-3"
                                    href="#"
                                >
                                    Hot Deals
                                </a>
                            </div>
                            <div className="navbar__end d-block d-lg-flex">
                                <a
                                    className="nav-link main-color px-lg-5"
                                    href="#"
                                >
                                    العربية
                                </a>
                                <a
                                    className="nav-link signin-btn px-lg-3"
                                    href="#"
                                >
                                    Sign in
                                </a>
                                <a
                                    className="nav-link signup-btn sec-btn"
                                    href="#"
                                >
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
// <nav className="mainNav navbar navbar-expand-lg navbar-light">
//     <span className="navbar-brand">
//         <img
//             src="data:image/png;base64,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"
//             className="sc-AxjAm jETaPt img-fluid "
//             alt="icon"
//         />
//     </span>
//     <button
//         aria-controls="responsive-navbar-nav"
//         type="button"
//         aria-label="Toggle navigation"
//         className="navbar-toggler collapsed"
//     >
//         <span className="navbar-toggler-icon"></span>
//     </button>
//     <div
//         className="navbar-collapse collapse"
//         id="responsive-navbar-nav"
//     >
//         <div className="mr-auto ml-5 mainNav__firstchild navbar-nav">
//             <a href="/app-develop/list" className="nav-link">
//                 HOME
//             </a>
//             <a href="/app-develop/hotdeals" className="nav-link">
//                 Hot Deals
//             </a>
//         </div>
//         <div className="align-items-center mainNav__secondchild ml-5 navbar-nav">
//             <a
//                 href="#"
//                 className="arFont mr-lg-5 font-18px nav-link"
//                 role="button"
//             >
//                 العربية
//             </a>
//             <a href="#" className="nocursor nav-link" role="button">
//                 <button
//                     type="button"
//                     className="signin-button mainbtn btn-empty mt-0 btn btn-"
//                 >
//                     Sign in
//                 </button>
//                 <button
//                     type="button"
//                     className="mainbtn signin-button  mt-0 btn btn-"
//                 >
//                     Sign up
//                 </button>
//             </a>
//             <a
//                 href="#"
//                 className=" nocursor mr-5 nav-link"
//                 role="button"
//             ></a>
//         </div>
//     </div>
// </nav>
