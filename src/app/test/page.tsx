"use client";

import { SingleImageDropzone } from "@/components/SingleImageDropzone";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useEdgeStore } from "@/lib/edgestore";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

const UploadImage = () => {
  const [file, setFile] = useState<File>();
  const [progress, setProgress] = useState(0);

  const { edgestore } = useEdgeStore();

  const [date, setDate] = useState<Date>()

  return (
    <div className="flex flex-col gap-4 py-5">
      <SingleImageDropzone
        height={200}
        width={200}
        value={file}
        onChange={(file) => {
          setFile(file);
        }}
        dropzoneOptions={{ maxSize: 1024 * 1024 * 1 }}
      />
      <div className="h-[7px] w-full max-w-sm border rounded overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
      <Button
        className="w-full max-w-sm"
        onClick={async () => {
          if (file) {
            const res = await edgestore.PublicFiles.upload({
              file,

              onProgressChange: (progress) => {
                // you can use this to show a progress bar
                setProgress(progress);
                console.log(progress);
              },
              //   options: {
              //     replaceTargetUrl:
              //       "https://files.edgestore.dev/8cp1ivog9zsfz10h/DestinationImage/_public/fd91da86-16ec-4f1f-97e7-379aeb363fc8.png",
              //   },
            });
            // you can run some server action or api here
            // to add the necessary data to your database
            console.log(res);
          }
        }}
      >
        Upload
      </Button>

      <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
    </div>
  );
};

export default UploadImage;
