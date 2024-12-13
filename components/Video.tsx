/**
 * A small React video component to keep all the videos
 * consistent.
 * 
 * TODO: Figure out how to fix the root path in Github Pages.
 */

'use client'

const Video = ({ src }: { src: string }) => {
  if (!src) {
    throw new Error('File path cannot be empty.')
  }

  const path = src.startsWith('/')
    ? `/ap-cs-wiki/static/videos${src}`
    : `/ap-cs-wiki/static/videos/${src}`

  return (
    <video width="960" height="720" controls>
      <source src={path} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default Video
