import React from "react";

export interface IconProps
    extends React.SVGProps<SVGSVGElement> {}

const Send = React.forwardRef<SVGSVGElement, IconProps>(
	(props, ref) => {
		return (
            <svg
                ref={ref}
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
            </svg>
		)
	}
)

Send.displayName = "Send";
export default Send;
