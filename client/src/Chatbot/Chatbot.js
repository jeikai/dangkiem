import React from 'react'
import ReactDOM from 'react-dom'
import {
    IconButton, Card,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
    Typography,
    Button,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";
import {
    PlusIcon,
    ChatBubbleBottomCenterIcon
} from "@heroicons/react/24/outline";

export default function Chatbot() {
    const labelProps = {
        variant: "small",
        color: "blue",
        className:
            "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-bold",
    };
    const dialogRef = React.useRef(null)
    const openChatWindow = () => {
        dialogRef.current.showModal();
    }

    return (
        <>
            <dialog
                ref={dialogRef}
            >
                <div>
                    <Card className="w-full max-w-[24rem] ">
                        <Typography variant="h3" color="Blue" className="p-10">
                            Chỉnh sửa lượt đăng kiểm
                        </Typography>
                        <CardBody className="flex flex-col gap-4">
                            this is chatbot
                        </CardBody>
                        <CardFooter className="pt-0">
                            <div className="flex justify-end mt-3">
                                <Button onClick={() => dialogRef.current.close()}>Đóng</Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </dialog>
            <div className="fixed bottom-3 right-3">
                <SpeedDial>
                    <SpeedDialHandler>
                        <IconButton size="lg" className="rounded-full">
                            <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
                        </IconButton>
                    </SpeedDialHandler>
                    <SpeedDialContent>
                        <SpeedDialAction className="relative" onClick={() => {
                            dialogRef.current.showModal();
                        }}>
                            <ChatBubbleBottomCenterIcon className="h-5 w-5" />
                            <Typography {...labelProps}>Chatbot</Typography>
                        </SpeedDialAction>

                    </SpeedDialContent>
                </SpeedDial>
            </div>
        </>

    );
}