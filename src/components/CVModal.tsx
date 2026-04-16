import { useEffect } from "react";
import { X, Download, ExternalLink } from "lucide-react";

const CV_URL = "/cerine-oussedik-resume.pdf";

export const CVModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Resume preview"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

      <div
        className="relative glass rounded-3xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden shadow-glow"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-primary/15">
          <div>
            <h3 className="font-serif text-lg leading-tight">Cerine Oussedik — Resume</h3>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">PDF preview</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={CV_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs glass rounded-full px-3 py-1.5 hover:text-primary transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Open
            </a>
            <a
              href={CV_URL}
              download="Cerine-Oussedik-Resume.pdf"
              className="inline-flex items-center gap-1.5 text-xs bg-gradient-hero text-primary-foreground rounded-full px-3 py-1.5 font-medium shadow-glow hover:scale-105 transition-transform"
            >
              <Download className="w-3.5 h-3.5" /> Download
            </a>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-primary transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-background/40">
          <object data={`${CV_URL}#view=FitH`} type="application/pdf" className="w-full h-full">
            <iframe
              src={`${CV_URL}#view=FitH`}
              title="Resume"
              className="w-full h-full"
            />
          </object>
        </div>
      </div>
    </div>
  );
};
