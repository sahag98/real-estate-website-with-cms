import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const VideoDialog = ({ video }: { video: string }) => {
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
          <source src={`${video}#t=0.001`} type="video/mp4" />
          Sorry, your browser doesn&apos;t support embedded videos. Your browser
          does not support the video tag.
        </video>
      </DialogContent>
    </Dialog>
  )
}

export default VideoDialog
