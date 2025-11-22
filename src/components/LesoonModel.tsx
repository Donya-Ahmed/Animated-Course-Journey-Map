import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface LessonModalProps {
  lessonNumber: number;
  title: string;
  description: string;
  status: "done" | "active" | "disabled";
  open: boolean;
  onClose: () => void;
  onStartLesson: () => void;
}

const LessonModal = ({
  lessonNumber,
  title,
  description,
  status,
  open,
  onClose,
  onStartLesson,
}: LessonModalProps) => {
  const getStatusText = () => {
    switch (status) {
      case "active":
        return "Ready to Start";
      case "done":
        return "Completed";
      case "disabled":
        return "Locked";
      default:
        return "";
    }
  };

  const getButtonText = () => {
    switch (status) {
      case "active":
        return "Start Lesson";
      case "done":
        return "Review Lesson";
      default:
        return "Locked";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "bg-card border border-border rounded-xl shadow-2xl overflow-hidden p-0",
          "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed",
          "max-w-md w-full animate-scale-in"
        )}
      >
        <VisuallyHidden>
          <DialogTitle>{title}</DialogTitle>
        </VisuallyHidden>

        <div
          className={cn(
            "px-6 py-4 flex items-center justify-between",
            status === "active" && "bg-active/10",
            status === "done" && "bg-completed/10",
            status === "disabled" && "bg-locked/10"
          )}
        >
          <div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Lesson {lessonNumber}
            </div>
            <h3 className="text-xl font-bold text-card-foreground mt-1">
              {title}
            </h3>
          </div>
        </div>

        <div className="px-6 py-5 space-y-4">
          <div>
            <div
              className={cn(
                "px-4 py-2 rounded-full text-xs font-semibold inline-block",
                status === "active" && " border border-active text-active",
                status === "done" && "border border-completed text-completed",
                status === "disabled" && "border border-locked text-locked"
              )}
            >
              {getStatusText()}
            </div>
          </div>

          <p className="text-card-foreground/80 leading-relaxed">
            {description}
          </p>
          <div className={status === "disabled" ? "cursor-not-allowed" : "cursor-pointer"}>
            <Button
              onClick={onStartLesson}
              disabled={status === "disabled"}
              className={cn(
                "w-full font-semibold py-6 text-base cursor-pointer",
                status === "active" && "bg-active hover:bg-active/90",
                status === "done" && "bg-completed hover:bg-completed/90"
              )}
            >
              {getButtonText()}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LessonModal;
