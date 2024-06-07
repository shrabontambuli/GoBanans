import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const Details = () => {
    return (
        <div className="my-20">
            <h1>Details is Coming............!!!!!!!!!</h1>

            <div className='flex justify-center mt-10'>
                <Link to="/">
                    <Button className='bg-slate-700' variant="contained">
                        Go Back
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Details;