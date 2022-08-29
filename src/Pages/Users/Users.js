import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { Link } from 'react-router-dom'

import { IconButton } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'

import { userRows } from '../../data'

import Modal from '../../componets/Modal/Modal'

function Users () {
	
	const [userData, setUserData] = useState(userRows)
	const [openModal, setOpenModal] = useState(false);
	const [deleteUserID, setDeleteUserID] = useState(null)
	
	const handleToggle = (userID) => {
		setDeleteUserID(userID)
		setOpenModal(!openModal);
	};
	
	const DeleteUser = () => {
		setUserData(userData.filter( user => user.id !== deleteUserID))
	}
	
	const columns = [
		{
			field: 'id',
			headerName: 'ID',
			width: 90
		},
		{
			field: 'user',
			headerName: 'User',
			width: 200,
			renderCell: (params) => {
				return (
					<Link to="/" className="text-decoration-none">
						<div className='tableList'>
							<img src={params.row.avatar} alt='hello' />
							{params.row.username}
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
						<Link to={`/user/${params.row.id}`} className="link">
							<IconButton color={'success'}>
								<Edit color={'success'} />
							</IconButton>
						</Link>
						<IconButton color={'error'}>
							<Delete
								color={'error'}
								className="userListDelete"
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
			<DataGrid
				rows={userData}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
			<Modal cancel={'No don\'t Delete'} ok={'Yes Delete'} onDelete={DeleteUser} open={openModal} setOpen={setOpenModal} setUserID={setDeleteUserID}>
				Are you sure you want to delete this user for ever???
			</Modal>
		</div>
	);
}

export default Users