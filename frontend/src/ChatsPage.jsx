import {MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic('3ab03074-8187-4f63-beb4-762e3383b8ef',props.user.username, props.user.secret);
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;