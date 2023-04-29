import classes from './ImageContainer.module.css';
import meat from '../images/meat.png';
import hamburguer from '../images/burguer.png';
import drinks from '../images/drinks.png';
import pasta from '../images/pasta.png';
import entrance from '../images/entrance.png';
import dessert from '../images/dessert.png';

export function ImageContainer({ image, border }) {
	const imageObj = {
		meat: meat,
		hamburguer: hamburguer,
		drinks: drinks,
		pasta: pasta,
		entrance: entrance,
		dessert: dessert,
	};
	let realImage = image.toString()

	let usedImage = imageObj[realImage]

	return (
		<img
			src={usedImage}
			alt="Food"
			className={classes.photo + ' ' + (border ? classes.photoBorder : ' ')}
		/>
	);
}
