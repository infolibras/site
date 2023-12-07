"use client"

import { YouTubeEmbed } from "@next/third-parties/google"

const Video: React.FC<{ url: string }> = ({ url }) => {
  function getVideoId(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)

    return (match && match[2].length === 11)
      ? match[2]
      : null
  }

  return <YouTubeEmbed videoid={getVideoId(url)!} />
}

export default Video
