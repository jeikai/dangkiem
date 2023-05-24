import React from 'react'
import {
    Card,
    Typography,
    Button,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";


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
                            Trò chuyện với chatbot
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
            <div className="fixed bottom-3 right-3 z-10">
                <Button className='rounded-full p-3' onClick={() => dialogRef.current.showModal()}>Chatbot</Button>
            </div>
        </>

    );
}