import { X } from "lucide-react";

interface ZoomModalProps {
  image: string;
  onClose: () => void;
}

export default function ZoomModal({ image, onClose }: ZoomModalProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <img
        src={image}
        alt="Zoomed view"
        className="max-w-full max-h-full object-contain p-4"
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
      >
        <X size={24} className="text-white" />
      </button>
    </div>
  );
}