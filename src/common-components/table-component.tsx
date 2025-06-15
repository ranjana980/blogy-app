import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { format } from 'date-fns';

export default function TableComponent({ coulmns, data }: any) {

    const formatDate = (date: any) => {
        return format(new Date(date ?? "2025-06-09"), 'MMM d, yyyy');
    };

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
                    <TableRow>
                        <TableCell>S.no</TableCell>
                        {coulmns?.map((item: any) => (
                            <>
                                <TableCell>{item.title}</TableCell></>
                        ))}
                    </TableRow>
                    {data.map((row: any, index: number) => (
                        <TableRow
                            key={row}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{index + 1}</TableCell>
                            {coulmns.map((item: any, index1: number) => (
                                <>
                                    {item.type === "image" ? <TableCell key={row[index1]['title']} ><img style={{ height: '50px' }} src={row[index1][item?.accessor] ?? ""} height={50} width={50} /></TableCell>
                                        : item.type === 'node' ? <TableCell key={row[index1]?.['title']}>{row[index1] ? row[index1][item.accessor] : ""}    </TableCell> : <TableCell key={row[index1]?.['title']}>{item.type === "date" ? formatDate(row[index1] ? row[index1]?.[item?.accessor] : "2025-06-12") : row[index1]?.[item?.accessor]}</TableCell>}
                                </>
                            ))}
                        </TableRow >
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
