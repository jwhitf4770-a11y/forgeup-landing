export type Message = {
  from: "user" | "milo";
  text: string;
};

export function MiloConversation({ messages }: { messages: Message[] }) {
  return (
    <div className="space-y-4">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
              msg.from === "user"
                ? "bg-[var(--color-primary)] text-black rounded-br-none"
                : "bg-[var(--color-surface)] text-[var(--color-text)] rounded-bl-none flex items-start gap-2"
            }`}
          >
            {msg.from === "milo" && (
              <div className="w-6 h-6 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[10px] font-bold text-[var(--color-primary)]">M</span>
              </div>
            )}
            <p className="text-sm leading-relaxed">
              {msg.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
