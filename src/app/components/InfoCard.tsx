import React from "react";
import { useIsMobile } from "./ui/use-mobile";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

type InfoCardProps = {
  title: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
  className?: string;
};

export function InfoCard({ title, trigger, content, className }: InfoCardProps) {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);

  if (isMobile) {
    return (
      <>
        <div
          className={className}
          onClick={() => setOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setOpen(true);
          }}
        >
          {trigger}
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-2xl bg-slate-950 text-white border-orange-500/30">
            <DialogHeader>
              <DialogTitle className="text-orange-300">{title}</DialogTitle>
            </DialogHeader>
            {content}
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return (
    <HoverCard openDelay={120}>
      <HoverCardTrigger asChild>
        <div className={className}>{trigger}</div>
      </HoverCardTrigger>
      <HoverCardContent className="w-[28rem] bg-slate-950 text-white border border-orange-500/30">
        {content}
      </HoverCardContent>
    </HoverCard>
  );
}

