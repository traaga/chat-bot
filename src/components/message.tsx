import Avatar from "./avatar";

export default function Message(props: { fromUser: boolean, message: string }) {
    return (props.fromUser ?
        <div className="flex items-start gap-4 justify-end">
            <div className="rounded-2xl p-4 max-w-[80%] bg-secondary text-foreground user-message-shadow leading-8 whitespace-pre-line">
                {props.message}
            </div>
            <Avatar className="mt-2">
                <img src="./placeholder-user.jpg" />
            </Avatar>
        </div> : <div className="flex items-start gap-4">
            <Avatar className="bg-primary text-foreground mt-2 tracking-wide font-bold">AI</Avatar>
            <div className="rounded-2xl p-4 max-w-[80%] bg-foreground text-primarytext ai-message-shadow leading-8 whitespace-pre-line">
                {props.message}
            </div>
        </div>
    )
}
