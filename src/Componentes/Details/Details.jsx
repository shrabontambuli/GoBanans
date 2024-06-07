import { Button } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Details = () => {
    const newData = useLoaderData();
    const { name, username, email, website, phone } = newData;
    const { street, suite, city, zipcode } = newData.address;
    return (
        <div className="my-20">
            <Card className="grid grid-cols-1 md:grid-cols-2 md:justify-items-center">
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h4">
                        Name: {name}
                    </Typography>
                    <Typography className="mt-4" variant="h5" color="text.secondary" component="div">
                        Company: {newData?.company?.name}
                    </Typography>
                    <Typography className="mt-2" variant="h5" color="text.secondary" component="div">
                        Website: {website}
                    </Typography>
                    <Typography className="mt-2" variant="h5" color="text.secondary" component="div">
                        Email: {email}
                    </Typography>
                    <Typography className="mt-2" variant="h5" color="text.secondary" component="div">
                        Phone: {phone}
                    </Typography>
                    <Typography className="mt-2" variant="h5" color="text.secondary" component="div">
                        Username: {username}
                    </Typography>
                </CardContent>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h4">
                        Address:
                    </Typography>
                    <Typography className="mt-4" variant="h5" color="text.secondary" component="div">
                        Street: {street}
                    </Typography>
                    <Typography className="mt-2" variant="h5" color="text.secondary" component="div">
                        Suite: {suite}
                    </Typography>
                    <Typography className="mt-2" variant="h5" color="text.secondary" component="div">
                        City: {city}
                    </Typography>
                    <Typography className="mt-2" variant="h5" color="text.secondary" component="div">
                        Zipcode: {zipcode}
                    </Typography>
                </CardContent>
            </Card>

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