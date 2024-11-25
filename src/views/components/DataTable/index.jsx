import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';

export const DataTable = ({ constructor }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align='center'>Протокол</TableCell>
                        <TableCell align='center'>Полoжение</TableCell>
                        <TableCell align='center'>Договор</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>Количество заявок:</TableCell>
                        <TableCell align='center'>1</TableCell>
                        <TableCell align='center'>3</TableCell>
                        <TableCell align='center'>5</TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow align='right'>
                        <TableCell>Итого</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
}