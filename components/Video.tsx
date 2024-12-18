/**
 * A small React video component to keep all the videos
 * consistent.
 *
 * NOTE: Videos don't load on localhost because GitHub's root
 * isn't at /ap-cs-wiki.
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
