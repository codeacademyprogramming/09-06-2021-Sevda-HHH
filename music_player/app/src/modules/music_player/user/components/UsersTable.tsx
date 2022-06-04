import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import { IUser } from '../../models'
interface IProps {
    data: any
}
export const UsersTable: React.FC<IProps> = ({ data }) => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Name</b></TableCell>
                            <TableCell><b>Surname</b></TableCell>
                            <TableCell><b>Email</b></TableCell>
                            <TableCell><b>Pass</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            (data != null) && data.map((userr: IUser) => {
                                return (<TableRow  >
                                    <TableCell component="th" scope="row">
                                        {userr.name}
                                    </TableCell>
                                    <TableCell >{userr.surname}</TableCell>
                                    <TableCell >{userr.pass}</TableCell>
                                    <TableCell >{userr.email}</TableCell>
                                </TableRow>)
                            })
                        }

                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

