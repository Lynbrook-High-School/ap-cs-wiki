'use client'

const Video = ({ src }: { src: string }) => {
  if (!src) {
    throw new Error('File path cannot be empty.')
  }

  const path = src.startsWith('/') ? `/static/videos${src}` : `/static/videos/${src}`

  return (
    <video width="960" height="720" controls>
      <source src={path} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default Video
