"use client";

import { SingleImageDropzone } from "@/components/SingleImageDropzone";
import { Button } from "@/components/ui/button";
import { useEdgeStore } from "@/lib/edgestore";
import React, { useState } from "react";

const UploadImage = () => {
  const [file, setFile] = useState<File>();
  const [progress, setProgress] = useState(0);

  const { edgestore } = useEdgeStore();

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
    </div>
  );
};

export default UploadImage;
