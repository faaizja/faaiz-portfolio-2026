import React from 'react'
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'

import ContactButton from "../components/contactButton";

export default function Footer() {
	return (
		<footer className="w-full bg-gray-50 text-black py-12">
			<div className="mx-auto flex flex-col gap-10 px-6 md:flex-row md:items-start md:justify-between md:px-12">
				<div className="max-w-md space-y-4">
					<h1 className="text-2xl lg:text-4xl font-semibold tracking-tight">Let's connect</h1>
					<p className="text-sm text-gray-600 lg:text-lg">
						I’m always open to meeting new people and hearing what you're passionate about. My inbox is always open for anything from project inquiries to casual tech chats and everything in between.
					</p>
					<div className="flex flex-wrap lg:gap-4 gap-3 mt-6 lg:mt-22">
						<SocialIcon url="https://www.linkedin.com/in/faaiz-abdullah-9004391a4/" network="linkedin" className='hover:-rotate-12 transition-transform duration-300 ease-in-out'/>
						<SocialIcon url="https://github.com/faaizja" network="github" className='hover:-rotate-12 transition-transform duration-300 ease-in-out'/>
						<SocialIcon url="https://discordapp.com/users/faaizja" network="discord" className='hover:-rotate-12 transition-transform duration-300 ease-in-out'/>
						<SocialIcon url="https://www.instagram.com/faaiz.jd" network="instagram" className='hover:-rotate-12 transition-transform duration-300 ease-in-out'/>
					</div>
				</div>

				<form className="flex w-full max-w-xl flex-col gap-4">
					<input
						type="text"
						placeholder="Name"
						className="w-full border border-gray-200 bg-gray-100 px-4 py-3 text-sm outline-none focus:border-gray-400 rounded-lg"
					/>
					<input
						type="email"
						placeholder="Email"
						className="w-full border border-gray-200 bg-gray-100 px-4 py-3 text-sm outline-none focus:border-gray-400 rounded-lg"
					/>
					<textarea
						rows={4}
						placeholder="Hey Faaiz. I was interested in..."
						className="w-full resize-none border border-gray-200 bg-gray-100 px-4 py-3 text-sm outline-none focus:border-gray-400 rounded-lg"
					/>
					<div className="pt-2">
						<ContactButton word="Send"/>
					</div>
				</form>
			</div>
		</footer>
	)
}