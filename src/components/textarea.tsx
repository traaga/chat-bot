import React from "react";
import { twMerge } from "tailwind-merge";

interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				className={twMerge(
					"flex min-h-11 max-h-[50vh] w-full rounded-md px-3",
					"py-2 text-base",
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)

Textarea.displayName = "Textarea";
export default Textarea;
