function Options () {
	return (
		<div className='d-block border-top border-bottom w-100 my-5 py-3 user-select-none'>
			<div className='d-flex justify-content-between my-2 mx-3'>
				<div className='d-flex align-items-center'>
					<img style={ { width: 45, height: 45, marginTop: 2 } } src="/Images/our options/express-delivery.svg" alt="express delivery"/>
					<p className='ms-2 mb-0 text-black-50'>Possibility of <br /> express delivery</p>
				</div>
				<div className='d-flex align-items-center'>
					<img style={ { width: 45, height: 45, marginTop: 2 } } src="/Images/our options/support.svg" alt="support"/>
					<p className='ms-2 mb-0 text-black-50'>Every day, Every time</p>
				</div>
				<div className='d-flex align-items-center'>
					<img style={ { width: 45, height: 45, marginTop: 2 } } src="/Images/our options/cash-on-delivery.svg" alt="cash on delivery"/>
					<p className='ms-2 mb-0 text-black-50'>Possibility of <br /> paying any where</p>
				</div>
				<div className='d-flex align-items-center'>
					<img style={ { width: 45, height: 45, marginTop: 2 } } src="/Images/our options/days-return.svg" alt="days return"/>
					<p className='ms-2 mb-0 text-black-50'>Seven days return <br /> guarantee</p>
				</div>
				<div className='d-flex align-items-center'>
					<img style={ { width: 45, height: 45, marginTop: 2 } } src="/Images/our options/original-products.svg" alt="express delivery"/>
					<p className='ms-2 mb-0 text-black-50'>Original products <br /> guarantee</p>
				</div>
			</div>
		</div>
	)
}

export default Options