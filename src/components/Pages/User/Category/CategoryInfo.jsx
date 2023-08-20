import React, { useEffect, useState } from 'react'
import WithAuth from '../../../../Layout/WithAuth';
import { Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, styled, tableCellClasses } from '@mui/material';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import CategoryService from '../../../../services/CategoryService';


function CategoryInfo() {


    const [categories, setCategories] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const GetAllCategories = () => {
        CategoryService.GetAllCategories().then((response) => {
            setCategories(response.data.result)
        })
    }

    useEffect(() => {
        GetAllCategories();
    }, []);

    const deleteCategory = (id) => {
        CategoryService.DeleteCategory(id).then(() => {
            toast.success("Delete Sucsessfully")
            GetAllCategories();
        })
    }

    const navigate = useNavigate();

    return (

        <>
            <div >
                <br />
                <br />
                <p><u>All Categroies</u></p>
                <br />

                <a href="/AddCategory">
                    Add New Category
                    <IconButton
                        aria-label="Add Category"
                        size="large"
                    >
                        <AddIcon sx={{ fontSize: 35 }} />
                    </IconButton>
                </a>


                <div id='books-table'>
                    <TableContainer>
                        <Table  >
                            <TableHead>
                                <TableRow >
                                    <TableCell><b>Category Id</b></TableCell>
                                    <TableCell><b>Category Name</b></TableCell>
                                    <TableCell><b>Edit</b></TableCell>
                                    <TableCell><b>Delete</b></TableCell>
                                </TableRow>

                            </TableHead>
                            <TableBody>
                                {categories
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((categories, index) => {
                                        return <TableRow
                                            key={index}>
                                            <TableCell>{categories.id}</TableCell>
                                            <TableCell>{categories.name}</TableCell>
                                            <TableCell>
                                                <Button
                                                    type='Edit'
                                                    variant='contained'
                                                    sx={{
                                                        color: "white",
                                                        bgcolor: "green",
                                                    }}
                                                onClick={()=>{
                                                    Cookies.set("categoryId", (categories.id));
                                                    Cookies.set("categoryName", (categories.name));
                                                    navigate('/EditCategory');
                                                }}
                                                >Edit</Button>
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    type='Delete'
                                                    variant='contained'
                                                    onClick={() => {
                                                        deleteCategory(categories.id);
                                                    }}
                                                    sx={{
                                                        color: "white",
                                                        bgcolor: "red",
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    }
                                    )}
                            </TableBody>

                        </Table>
                    </TableContainer>
                    <TablePagination
                        component="div"
                        count={categories.length}
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
export default WithAuth(CategoryInfo);