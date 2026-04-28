import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const VideoDialog = ({ video }: { video?: string | null }) => {
  const videoSrc = video?.trim() ? `${video}#t=0.001` : null

  if (!videoSrc) {
    return (
      <button
        type="button"
        disabled
        className="h-10 cursor-not-allowed bg-muted px-4 py-2 text-base font-bold text-muted-foreground"
      >
        Video Unavailable
      </button>
    )
  }

  return (
    <Dialog>
      <DialogTrigger className="h-10 bg-primary px-4 py-2 text-base font-bold text-primary-foreground">
        Watch Video
      </DialogTrigger>
      <DialogContent className="">
        <video
          preload="auto"
          playsInline={true}
          controls
          className="h-3/4 w-full self-center"
        >
          <source src={videoSrc} type="video/mp4" />
          Sorry, your browser doesn&apos;t support embedded videos. Your browser
          does not support the video tag.
        </video>
      </DialogContent>
    </Dialog>
  )
}

export default VideoDialog
