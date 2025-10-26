import { Button, ForwardIcon, Input } from "src/shared/components";

import type { TextAreaProps } from "../../types";

const StyledInputArea = "p-3 border-t border-slate-200";
const StyledInputContainer = "flex gap-2";
const StyledInput = "[&_input]:py-2.5 [&_input]:border [&_input]:rounded-xl";
const StyledSendButton = "px-2.5 rounded-xl";

const TextArea = ({ message, setMessage, handleSendMessage }: TextAreaProps) => {
    return (
        <div className={StyledInputArea}>
            <div className={StyledInputContainer}>
                <Input
                    name="chat-message"
                    value={message}
                    autoComplete="off"
                    onChange={setMessage}
                    className={StyledInput}
                    onEnterKey={handleSendMessage}
                    placeholder={"chat.type-message"}
                />
                <Button
                    color="blue"
                    disabled={!message.trim()}
                    onClick={handleSendMessage}
                    className={StyledSendButton}
                >
                    <ForwardIcon color="#ffffff" /> 
                </Button>
            </div>
        </div>
    )
}

export default TextArea;