export default function Contact() {
	return (
		<div>
			<h1>Contact Us</h1>
			<p>
				We’d love to hear from you! Reach out to us using the details below.
			</p>
			<hr />

			<h2>Get in Touch</h2>
			<p>
				<strong>Merchant Legal Entity:</strong> BIZ LINK NETWORK PRIVATE LIMITED
			</p>

			<h3>Registered Address:</h3>
			<p>
				Flat No.203, RR Heights, 7-1-414/6, Srinivasanagar, Sanjeev Reddy Nagar
				S.O, Ameerpet, Telangana, India, 500038
			</p>

			<h3>Operational Address:</h3>
			<p>
				Flat No.203, RR Heights, 7-1-414/6, Srinivasanagar, Sanjeev Reddy Nagar
				S.O, Ameerpet, Telangana, India, 500038
			</p>

			<h3>Phone:</h3>
			<p>
				📞 <a href="tel:+918096053819">8096053819</a>
			</p>

			<h3>Email:</h3>
			<p>
				📧 <a href="mailto:infojaaaga@gmail.com">infojaaaga@gmail.com</a>
			</p>

			<p>Last updated on 04-03-2025 12:43:56</p>
			<hr />

			<h2>Send Us a Message</h2>
			<form>
				<label htmlFor="name">Your Name:</label>
				<input type="text" id="name" name="name" required />

				<br />

				<label htmlFor="email">Your Email:</label>
				<input type="email" id="email" name="email" required />

				<br />

				<label htmlFor="message">Message:</label>
				<textarea id="message" name="message" required></textarea>

				<br />

				<button type="submit">Send Message</button>
			</form>
		</div>
	);
}
