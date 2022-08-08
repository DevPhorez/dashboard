import { Box as MUIBox } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { ArrowDownward, ArrowUpward, AttachMoneyOutlined } from "@mui/icons-material";
import { Item } from "../../Pages/Home/Home";

function Box (props) {
	return (
		<Col className='px-sm-0 px-1' md={12} lg={4}>
			<MUIBox
				sx={{
					p: 2,
					bgcolor: 'background.default',
					display: 'block',
				}}
			>
				<Item elevation={6}>
					<p className='text-lg-start text-center fs-5 mb-2'>{ props.title }</p>
					
					<Row className='d-flex align-items-center'>
						<Col  sm={12} lg={5} className='ps-lg-0'>
							<p className='text-start text-sm-center h3 text-dark mb-2'>
								<span  style={ { fontSize: 34, marginLeft: -11 } } >
									<AttachMoneyOutlined fontSize='inherit' />
								</span>
								<span style={ { marginLeft: -9 } }>
									{ props.money.toLocaleString('en-IN') }
								</span>
							</p>
						</Col>
						<Col sm={12} lg={6} className='ps-lg-0'>
							<p className='text-center text-900 mb-2'>
								{ props.changes }
								<span>
									{
										props.changes > 0 ? (
											<ArrowUpward color={'success'} />
										) : (
											<ArrowDownward color={'error'} />
										)
									}
								</span>
							</p>
						</Col>
					</Row>
					<p className='text-black-50 text-lg-start text-center fw-bold m-0 mt-2'>
						Compared to last month
					</p>
				</Item>
			</MUIBox>
		</Col>
	)
}

export default Box