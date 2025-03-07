export default function ContactPage() {
	return (
		<div className="flex justify-center items-center min-h-screen bg-pipboyBackground">
			<div className="bg-pipboyBackground p-8 w-full max-w-md">
				<h1 className="text-2xl font-bold mb-6 text-center text-pipboyGreen">
					Contact Us
				</h1>
				<p className="mb-4 text-pipboyGreen">
					Please fill out the form below to contact us.
				</p>
				<form action="#" method="post">
					<div className="mb-4">
						<label htmlFor="name" className="block text-pipboyGreen">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="w-full p-2 border border-pipboyDarkGreen bg-pipboyBackground text-pipboyGreen"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="email" className="block text-pipboyGreen">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full p-2 border border-pipboyDarkGreen bg-pipboyBackground text-pipboyGreen"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="message" className="block text-pipboyGreen">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							rows={4}
							className="w-full p-2 border border-pipboyDarkGreen bg-pipboyBackground text-pipboyGreen"
						></textarea>
					</div>
					<button
						type="submit"
						className="text-sm bg-pipboyGreen px-4 py-1 rounded-full text-pipboyBackground hover:text-pipboyBackground hover:bg-pipboyYellow text-center w-full"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
