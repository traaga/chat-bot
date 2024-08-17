import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, ...props }, ref) => {
		return (
			<button
				className={twMerge("inline-flex items-center justify-center whitespace-nowrap rounded-md", className)}
				ref={ref}
				{...props}
			/>
		)
	}
)

Button.displayName = "Button";
export default Button;
