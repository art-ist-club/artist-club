import { ConversationMessage } from "@/hooks/useConversation";

type Props = {
  message: ConversationMessage;
  isMine: boolean;
};

export default function MessageBubble({ message, isMine }: Props) {
  return (
    <div className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-5 py-4 ${
          isMine
            ? "bg-[#f5b942] text-black"
            : "border border-white/10 bg-white/[0.05] text-white"
        }`}
      >
        <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
          {message.sender_type}
        </div>

        <div className="mt-2 whitespace-pre-wrap break-words leading-7">
          {message.message}
        </div>

        <div className="mt-3 text-[11px] opacity-50">
          {new Date(message.created_at).toLocaleString("tr-TR")}
        </div>
      </div>
    </div>
  );
}
