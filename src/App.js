import React from 'react';

import styles from './App.module.css'

import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import Countries from './components/Countries/Countries';

import { fetchData } from './api';

import coronaImage from './images/image.png';




class App extends React.Component {
	state = {
		data: {},
		country: '',

	}
	async componentDidMount() {
		const fetchedData = await fetchData();

		this.setState({data : fetchedData}); 
	}

	handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);

		this.setState({ data : fetchedData , country: country }); 
		

	}

	render() {
		const {data, country} = this.state;

		return (
		<div className={styles.container} >
			<img className={styles.image} src={coronaImage} alt="covid19" />
		<Cards data={data} />
		<Countries handleCountryChange={this.handleCountryChange}/>
		<Charts data={data} country={country}/>
		

			</div >
        );
    }
}

export default App;