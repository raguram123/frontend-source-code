import React, { useState, useEffect, useContext, useMemo } from 'react'
import ProductList from './ProductList.js';
import { Link } from "react-router-dom"
import axios from "axios";
import LoginContext from '../Context/LoginContext.js';



function Product() {
    const [isLoading, setLoading] = useState(true);
    const logindata = useContext(LoginContext);
    const [bookdata, setbookData] = useState([]);
    const [search, setSearch] = useState("");
    const handlesearch = (data, search) => {
        const filteredData = data.filter((d, i) => {
            d.book_name = d.book_name.toLowerCase();
            if (d.book_name.includes(search)) {
                return true;
            }
        });
        return filteredData;
    }
    const filteredData = useMemo(() => handlesearch(bookdata, search));



    useEffect(() => {
        getUsers();
    }, []);

    let getUsers = async () => {
        try {
            const users = await axios.get("https://638dfe2b4190defdb753283c.mockapi.io/books");
            setbookData(users.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const DeleteBook = async (id) => {
        const confirm = window.confirm("Do you want to delete this record?")

        if (confirm) {
            await axios.delete(`https://638dfe2b4190defdb753283c.mockapi.io/books/${id}`);
            getUsers();
        }
    };

    return (
        <>
            <div className="card shadow mb-4 m-3">
                <div className="card-header py-3 d-sm-flex  justify-content-between mb-4">
                    <h6 className="m-0 font-weight-bold text-primary">Product List</h6>
                    <form className="d-flex justify-content-between">
                        <input style={{ textTransform: "capitalize" }} className="form-control me-2" type="search" placeholder="search by productname" aria-label="Search"
                            onChange={(e) => setSearch(e.target.value)} />
                    </form>
                    {logindata.isLibrarianVisible ? <Link className="btn btn-outline-success" to="/portal/addbook">Add Product</Link> : null}

                </div>
                {isLoading ? <h1>Page Loading...</h1> : <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Product Name</th>
                                    <th>Manufacturer</th>
                                    <th>Stocks</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!search && bookdata?.map((dt, index) => <ProductList key={index} bookdata={dt} DeleteBook={DeleteBook} />)}
                                {search && filteredData?.map((dt, index) => <ProductList key={index} bookdata={dt} DeleteBook={DeleteBook} />)}
                            </tbody>
                        </table>
                    </div>
                </div>}

            </div>
            <div className="d-sm-flex  justify-content-start" >
                <Link to="/portal/dashboard" className="btn btn-sm btn-primary shadow-sm ">Back</Link>
            </div>
        </>
    )
}

export default Product
