import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { Link } from 'react-router-dom'

import { IconButton } from '@mui/material'
import { Delete, Visibility } from '@mui/icons-material'

import { products } from '../../data'

import Modal from '../../componets/Modal/Modal'

import { Helmet } from "react-helmet";


function Products () {
	
	const [productData, setProductData] = useState(products)
	const [openModal, setOpenModal] = useState(false);
	const [deleteProductID, setDeleteProductID] = useState(null)
	
	const handleToggle = (productID) => {
		setDeleteProductID(productID)
		setOpenModal(!openModal);
	};
	
	const DeleteProduct = () => {
		setProductData(productData.filter( product => product.id !== deleteProductID))
	}
	
	const columns = [
		{
			field: 'id',
			headerName: 'ID',
			width: 90
		},
		{
			field: 'product',
			headerName: 'Product',
			width: 200,
			renderCell: (params) => {
				return (
					<Link to={`/product/${params.row.id}/${params.row.title.replace(' ', '+')}`} className="text-decoration-none">
						<div className='tableList'>
							<img src={params.row.image} alt={params.row.title} />
							{params.row.title}
						</div>
					</Link>
				)
			}
		},
		{
			field: 'email',
			headerName: 'Email',
			width: 200
		},
		{
			field: 'status',
			headerName: 'Status',
			width: 120
		},
		{
			field: 'transaction',
			headerName: 'Transaction',
			width: 160
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={`/product/${params.row.id}/${params.row.title.replace(' ', '+')}`} className="link">
							<IconButton color={'secondary'}>
								<Visibility />
							</IconButton>
						</Link>
						<IconButton color={'error'}>
							<Delete
								color={'error'}
								className="productListDelete"
								onClick={ () => handleToggle(params.row.id) }
							/>
						</IconButton>
					</>
				)
			}
		}
	]
	
	const screenWidth = document.body.offsetWidth
	
	return (
		<div className='position-absolute end-0 mt-5 ps-3 pe-4' style={ { height: 400, width: screenWidth >= 768 ? screenWidth - 212.828 : '100%' } }>
			<Helmet>
				<title>Phorez | Products</title>
			</Helmet>
			<DataGrid
				rows={productData}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
			<Modal cancel={'No don\'t Delete'} ok={'Yes Delete'} onDelete={DeleteProduct} open={openModal} setOpen={setOpenModal} setProductID={setDeleteProductID}>
				Are you sure you want to delete this product for ever???
			</Modal>
		</div>
	);
}

export default Products