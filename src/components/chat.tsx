'use client'
import Avatar from "@/components/avatar"
import Button from "@/components/button"
import Textarea from "@/components/textarea"
import Message from "./message"
import { useState } from "react";
import { useChat } from 'ai/react';
import Wave from "./wave"
import Send from "./send"

export default function Chat() {
	const [textAreaRows, setTextAreaRows] = useState(1);
	const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
		initialMessages: [{
			id: "welcome-message",
			role: "system",
			content: "Hi! How can I assist you?"
		}]
	});

	const handleOnSubmit = (event: any) => {
		setTextAreaRows(1);
		handleSubmit(event);
	}

	const handleOnKeyDown = (key: any) => {
		if (key.keyCode === 13 && (key.shiftKey || isLoading)) {
			if (textAreaRows < 19) {
				setTextAreaRows(textAreaRows + 1);
			}
		} else if (key.keyCode === 8 && key.shiftKey) {
			if (textAreaRows > 1) {
				setTextAreaRows(textAreaRows - 1);
			}
		} else if (key.keyCode == 13) {
			const el = document.querySelector("#chat-button") as HTMLButtonElement;
			key.preventDefault();
			el.click();
		}
	}

	return (
		<div className="flex flex-col min-h-screen max-h-screen bg-background">
			<header className="flex flex-none items-center justify-between px-6 pt-4 z-10 h-14 bg-primary">
				<div className="custom-shape-divider-top-1723660277 fill-primary">
					<Wave />
				</div>
				<div className="flex items-center gap-4 calculated-left-margin absolute top-8">
					<Avatar className="bg-background text-primary tracking-wide font-bold">AI</Avatar>
					<div className="font-bold text-foreground">ChatGPT</div>
				</div>
			</header>
			<main className="overflow-auto flex-1 no-scrollbar">
				<div className="max-w-3xl mx-auto pt-24 px-4 sm:px-6 lg:px-8 pb-8">
					<div className="grid gap-6">
						{messages.map(message =>
							<Message
								key={message.id}
								fromUser={message.role === "user"}
								message={message.content}
							/>)}
					</div>
				</div>
				<div id="scroll-anchor" />
			</main>
			<footer className="flex w-full flex-none items-center justify-center px-6 py-4 z-10">
				<form className="flex w-full max-w-3xl justify-center gap-4 items-end" onSubmit={handleOnSubmit}>
					<Textarea
						placeholder="Type your message..."
						className="w-textarea rounded-4xl px-5 py-[10px] focus:outline-none resize-none text-primarytext"
						autoFocus
						onKeyDown={handleOnKeyDown}
						onChange={handleInputChange}
						rows={textAreaRows}
						value={input}
					/>
					<Button
						id="chat-button"
						className="h-9 w-9 rounded-full mb-1 bg-secondary text-foreground hover:bg-primary active:scale-105 active:bg-secondary transition-all disabled:bg-disabled disabled:pointer-events-none"
						disabled={isLoading}
						type="submit"
					>
						<Send className="w-4 h-4 mr-[2px]" />
					</Button>
				</form>
			</footer>
		</div>
	)
}
