"use client"
import React from "react"

export const Video = () => {
  return (
    <div className="hero-img">
      <video
        controls
        poster="/images/cleo.jpg"
        className="md:h-[450px] h-[300px] w-full object-cover rounded-3xl"
        autoPlay
        loop
      >
        <source src="/videos/cleo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
