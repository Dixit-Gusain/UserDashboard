import react from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
    return (
        <>
            <div className="container-fluid mt-3">
                <div className="row pb-4">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="container pt-1 text-center">
                            © 2023, made with <FavoriteIcon className="fs-6" /> by Creative Tim for a better web.
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="container text-center">
                            <button className="btn border-0">Creative Tim</button>
                            <button className="btn border-0">About</button>
                            <button className="btn border-0">Blog</button>
                            <button className="btn border-0">License</button>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Footer;
