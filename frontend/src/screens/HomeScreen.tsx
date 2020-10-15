import Axios from 'axios'
import React, { useEffect } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Product from '../components/Product/Product'
import { useSelector, useDispatch } from 'react-redux'
import getProductList from '../actions/products/productListActions'
import Loader from '../components/Loader/Loader'
import Message from '../components/Message/Message'

const Home = () => {
	useEffect(() => {}, [])

	return (
		<div>
			<h2 className="text-center">Home</h2>
		</div>
	)
}

export default Home
