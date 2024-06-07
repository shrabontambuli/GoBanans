
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const DataTable = () => {
    const [data, setData] = useState([]);

    const url = ('https://jsonplaceholder.typicode.com/users')
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data.slice(5.0)))
    }, [])

    const handleMore = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }


    return (
        <div className='my-20'>
            <div>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow className='bg-slate-400'>
                            <TableCell className='text-lg py-6'>Name</TableCell>
                            <TableCell className='text-lg' align="right">Company</TableCell>
                            <TableCell className='text-lg' align="right">Email</TableCell>
                            <TableCell className='text-lg' align="right">Website</TableCell>
                            <TableCell className='text-lg' align="right">Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell className='text-lg font-medium' component="th" scope="row">
                                    {row?.name}
                                </TableCell>
                                <TableCell className='py-10 text-lg font-medium' align="right">{row?.company?.name}</TableCell>
                                <TableCell className='text-lg font-medium' align="right">{row?.email}</TableCell>
                                <TableCell className='text-lg font-medium' align="right">{row?.website}</TableCell>
                                <TableCell className='text-lg font-medium' align="right">
                                    <Link to={`/details/${row?.id}`}>
                                        <Button className='bg-slate-700' variant="contained" endIcon={<SendIcon />}>
                                            Details
                                        </Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className='flex justify-center mt-10'>
                <Button onClick={handleMore} className='bg-slate-700 px-4' variant="contained">
                    See More
                </Button>
            </div>
        </div>
    );
};

export default DataTable;