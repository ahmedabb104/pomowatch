import './Footer.css'

function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer id="footer-container">
			<p>&copy; { year } Ahmed Abbas All Rights Reserved</p>
		</footer>
	)
}

export default Footer;