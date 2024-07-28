import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Comment, Delete, Edit, ThumbUp } from '@mui/icons-material';

export default function TableComponent({ data }: any) {
    return (
        <TableContainer component={Paper} sx={{
            maxHeight: '510px',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
                width: '5px',
                borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
                background: '#1a3b4e',
                borderRadius: '10px',
            },
        }}>
            <Table aria-label="simple table">
                <TableBody>
                    {data.map((row: any, index: number) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell align='left'>
                                <img
                                    src="https://picsum.photos/70/70" height={100} width={100} style={{ borderRadius: '10px' }} />
                            </TableCell>
                            <TableCell align="left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium nam quas inventore, ut iu</TableCell>
                            <TableCell align="left" ><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}><ThumbUp sx={{ color: '#ff9800' }} /><b className='mt-2'>3.4k</b></div></TableCell>
                            <TableCell align="left"><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}><Comment sx={{ color: 'blue' }} /><b>3.4k</b></div></TableCell>
                            <TableCell align="left"><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}><Edit sx={{ cursor: 'pointer', color: 'green' }} /><Delete sx={{ cursor: 'pointer', color: 'red' }} /></div></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
