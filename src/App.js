import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/common/header/header.component';
import UserRepo from './containers/user-repo/user-repo.component';

function App() {
	return (
		<div>
			<Header title="xillio" />
			<div className="container">
				<UserRepo />
			</div>
		</div>
	);
}

export default App;
