import react from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
    return (
        <>
            <div className="d-flex flex-row pb-4">
                <div className="container pt-1">
                    © 2023, made with <FavoriteIcon className="fs-6" /> by Creative Tim for a better web.
                </div>
                <div className="container text-end ">
                    <button className="btn border-0">Creative Tim</button>
                    <button className="btn border-0">About</button>
                    <button className="btn border-0">Blog</button>
                    <button className="btn border-0">License</button>

                </div>
            </div>
        </>
    )
}
export default Footer;
