import Message from './Message'

const MessageList = ({ name, message }) => {
    return (
        <>
            <Message name={name} message={message} />
           <Message name={name} message={message} />
           <Message name={name} message={message} />
          <Message name={name} message={message} />
        </>
    );
}

export default MessageList;