import { MessageCircle, MessagesSquare } from "lucide-react";

const NoChatSelectedPage = () => {
  return (
    <div className="flex h-full min-h-[400px] flex-1 items-center justify-center bg-gray-50/50 p-6">
      <div className="flex max-w-sm flex-col items-center text-center">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-gray-200 bg-white shadow-sm">
          <MessagesSquare
            size={34}
            strokeWidth={1.4}
            className="text-gray-400"
          />
        </div>

        <h2 className="text-lg font-semibold tracking-tight text-gray-800">
          Ningún chat seleccionado
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Selecciona una conversación de la lista para comenzar a chatear.
        </p>

        <div className="mt-5 flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-xs text-gray-500">
          <MessageCircle size={14} strokeWidth={1.7} />
          <span>Tus conversaciones aparecerán aquí</span>
        </div>
      </div>
    </div>
  );
};

export default NoChatSelectedPage;
