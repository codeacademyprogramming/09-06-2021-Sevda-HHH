import { Box, Button, Container, FormGroup, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@material-ui/core";
import React, { FormEvent, useCallback, useState } from "react";
import { ERequestStatus, useAsyncData } from "../../../../hooks/useAsyncData";
import { IPlaylist, IUser } from "../../models";
import { userService } from "../service";
import { UsersTable } from "./UsersTable";


export function UsersPage() {
    const { state: userApply, call } = useAsyncData<IUser[] | IUser>();
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')
    React.useEffect(() => {
        if (userApply.status === ERequestStatus.IDLE) {
            call(() => userService.getUsers());
        }  
    }, [userApply.status, call]);


    const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault()
        const user: IUser = {
            name: name,
            surname: surname,
            pass: pass,
            email: email
        }
        call(() => userService.addUser(user).then(() => userService.getUsers()))

        console.log(userApply)
    }
    const callback = useCallback(
        () => {
            console.log("userApply", userApply);

        },
        [userApply],
    )
    callback()
    const data: any = userApply.data
    return (
        <>

            <UsersTable data={data} />
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>

                <Box>
                    <Container>
                        <FormGroup>
                            <TextField id="standard-basic" value={name} onChange={evt => setName(evt.target.value)} label="Name" name="name" type="text" />
                        </FormGroup>
                        <FormGroup>
                            <TextField id="standard-basic" label="Surname" name="surname" type="text"
                                value={surname}
                                onChange={evt => setSurname(evt.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <TextField
                                id="standard-basic"
                                label="email"
                                name="email"
                                type="text"
                                value={email}
                                onChange={evt => setEmail(evt.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <TextField
                                id="standard-basic"
                                label="password"
                                name="pass"
                                type="password"
                                value={pass}
                                onChange={evt => setPass(evt.target.value)}
                            />
                        </FormGroup>
                        <Button type="submit" color="primary" variant="contained">
                            Submit
                         </Button>
                    </Container>

                </Box>

            </form>

        </>
    )
}
