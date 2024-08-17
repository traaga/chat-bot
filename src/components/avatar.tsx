import React from "react";
import { twMerge } from "tailwind-merge";

interface AvatarProps
	extends React.HTMLAttributes<HTMLDivElement> { }

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={twMerge("flex h-10 w-10 items-center justify-center rounded-full overflow-hidden", className)}
				ref={ref}
				{...props}
			/>
		)
	}
)

Avatar.displayName = "Avatar";
export default Avatar;
