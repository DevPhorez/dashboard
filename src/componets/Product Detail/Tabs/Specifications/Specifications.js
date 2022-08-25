import { Row, Col } from 'react-bootstrap'
function Specifications (props) {
	return (
		<div>
			{
				props.specifications.map( (specification, index) => (
					<Row className='d-flex justify-content-evenly my-3'>
						<Col sm={2}>
							<p className='text-black-50'>{specification.title}</p>
						</Col>
						<Col sm={8}>
							<p className='text-900 mb-3'>{specification.value}</p>
							{
								index !== props.specifications.length - 1 && <hr className='m-0 text-black-50' />
							}
						</Col>
					</Row>
				))
			}
		</div>
	)
}
export default Specifications