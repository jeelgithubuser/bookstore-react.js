import React, { useEffect, useState } from 'react'
import bookService from '../../../../services/BookService';
import WithAuth from '../../../../Layout/WithAuth';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { toast } from 'react-toastify';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';

function BooksPage() {

   

    const navigate = useNavigate()



    const [books, setBooks] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const getBooks = () => {
        bookService.GetAllBooks().then((response) => {
            setBooks(response.data.result)

        })
    }

    useEffect(() => {
        getBooks();
    }, []);

    const deleteBook = (id) => {
        bookService.DeleteBook(id).then(() => {
            toast.success("Delete Sucsessfully")
            getBooks();
        })
    }

    const handleEdit = (id, name, price, categoryId, description, image) => {
        navigate("/UpdateBook")
        localStorage.setItem("name" , name)
        localStorage.setItem("price" , price)
        localStorage.setItem("id" , id)
        localStorage.setItem("category" , categoryId)
        localStorage.setItem("description" , description)
        localStorage.setItem("image" , image)
    }


    return (

        <>
            <div >
                <br />
                <br />
                <p>List of Books</p>
                <br />

                <div id='books-table'>
                    <TableContainer>
                        <Table>
                            <TableHead >
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Category</TableCell>
                                    <TableCell>Edit</TableCell>
                                    <TableCell>Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {books
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((book, index) => {
                                        return <TableRow
                                            key={index}>
                                            <TableCell>{book.name}</TableCell>
                                            <TableCell>{book.price}</TableCell>
                                            <TableCell>{book.category}</TableCell>
                                            <TableCell>
                                                <Button
                                                    type='Edit'
                                                    variant='contained'
                                                    sx={{
                                                        color: "white",
                                                        bgcolor: "green",
                                                    }}
                                                onClick={()=> handleEdit(book.id, book.name, book.price, book.categoryId, book.description, book.base64image)}
                                                >Edit</Button>
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    type='Delete'
                                                    variant='contained'
                                                    onClick={() => {
                                                        deleteBook(book.id);
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
                        count={books.length}
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
export default WithAuth(BooksPage);