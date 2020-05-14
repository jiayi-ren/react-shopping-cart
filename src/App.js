import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Context
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

// Hooks
import { useCart } from './hooks/useCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useCart('Cart', [])

	const addItem = item => {
		// add the given item to the cart
		setCart([
			...cart,
			item
		])
	};

	const removeItem = itemId => {
		const filterCart = cart.filter( item => item.id !== itemId)
		setCart(filterCart)
	}

	return (
		<div className="App">
			<CartContext.Provider value={{ cart, removeItem }}>
				<Navigation />

				<ProductContext.Provider value={{ products, addItem }}>
					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					
					<Route path="/cart">
						<ShoppingCart/>
					</Route>

				</ProductContext.Provider>
			</CartContext.Provider>
		</div>
	);
}

export default App;
