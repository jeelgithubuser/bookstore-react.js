import React, { useContext, useEffect, useState } from 'react'
// import WithAuth from '../Layout/WithAuth';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { toast } from 'react-toastify';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { AuthContext } from '../../../context/authContext';
import userService from '../../../services/UserService';
import { useNavigate } from 'react-router-dom';

function UserInfo() {

    const navigate = useNavigate();

    const User = useContext(AuthContext)
    const ID = User.user.id;

    const [users, setUsers] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const getUsers = () => {
        userService.GetAllUsers().then((response) => {
            setUsers(response.data.result)

        })
    }

    const deleteUser = (id) => {
        userService.DeleteUser(id).then(() => {
            toast.success("Delete Successfully")
            getUsers();
        })
    }

    useEffect(() => {
        getUsers();
    }, []);

    const handleEdit = (id, email, firstName, lastName, roleId, password) => {
        navigate("/EditUser")
        localStorage.setItem("id" , id)
        localStorage.setItem("email" , email)
        localStorage.setItem("firstName" , firstName)
        localStorage.setItem("lastName" , lastName)
        localStorage.setItem("roleId" , roleId)
        localStorage.setItem("password" , password)
        
    }

    return (

        <>
            <div >
                <br />
                <br />
                <p>All Users List</p>
                <br />

                <div id='users-table'>
                    <TableContainer>
                        <Table>
                            <TableHead >
                                <TableRow>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Role</TableCell>
                                    <TableCell>Edit</TableCell>
                                    <TableCell>Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((user, index) => {
                                        return <TableRow
                                            key={index}>
                                            <TableCell>{user.firstName}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{user.role}</TableCell>
                                            <TableCell>
                                                <Button
                                                    type='Edit'
                                                    variant='contained'
                                                    sx={{
                                                        color: "white",
                                                        bgcolor: "green",
                                                    }}
                                                    onClick={() => handleEdit(user.id , user.email, user.firstName, user.lastName, user.roleId, user.password)}
                                                >Edit</Button>
                                            </TableCell>
                                            <TableCell>
                                                {ID !== (user.id) && (
                                                    <Button
                                                        type='Delete'
                                                        variant='contained'
                                                        onClick={() => {
                                                            deleteUser(user.id);
                                                        }}
                                                        sx={{
                                                            color: "white",
                                                            bgcolor: "red",
                                                        }}
                                                    >
                                                        Delete
                                                    </Button>)}

                                            </TableCell>
                                        </TableRow>
                                    }

                                    )}
                            </TableBody>

                        </Table>
                    </TableContainer>
                    <TablePagination
                        component="div"
                        count={users.length}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div>
            </div>
        </>
    )
}
export default UserInfo;