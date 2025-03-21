'use client'
import React, { useEffect } from 'react';

const videos = [
  {
    title: 'AI Agent for Customer Support',
    description: 'Discover how our AI agents efficiently handle customer queries, providing 24/7 support.',
    videoUrl: 'https://www.youtube.com/embed/Fyo6vnM8BBk', // Example URL
    videoId: 'Fyo6vnM8BBk',
  },
  {
    title: 'AI Sales Assistant',
    description: 'Watch how our AI agents drive sales by engaging prospects and closing deals.',
    videoUrl: 'https://www.youtube.com/embed/efgh5678', // Example URL
    videoId: 'efgh5678',
  },
  {
    title: 'AI Agent for Healthcare',
    description: 'AI-enabled healthcare assistance for patient inquiries, appointment booking, and more.',
    videoUrl: 'https://www.youtube.com/embed/ijkl9101', // Example URL
    videoId: 'ijkl9101',
  },
  {
    title: 'AI Learning Assistant',
    description: 'Revolutionizing education with AI tutors guiding students through personalized learning.',
    videoUrl: 'https://www.youtube.com/embed/mnop2345', // Example URL
    videoId: 'mnop2345',
  },
];

export default function VideoSection() {
  useEffect(() => {
    // Load YouTube iframe API
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);

    // This function will be called by the YouTube API
    window.onYouTubeIframeAPIReady = function () {
      videos.forEach((video, index) => {
        const player = new window.YT.Player(`player-${index}`, {
          videoId: video.videoId,
          playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            start: 0,
            end: 10, // Loop first 10 seconds
            controls: 0, // Hide controls
            rel: 0,
            modestbranding: 1, // Remove YouTube logo and branding
            showinfo: 0,
            iv_load_policy: 3,   // Disable annotations on the video
          },
          events: {
            onReady: (event) => {
              event.target.mute(); // Ensure the video is muted
              event.target.playVideo(); // Play the video when ready
            },
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.seekTo(0); // Loop video back to start
              }
            },
          },
        });
      });
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-indigo-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
            AI Agent Videos
          </h2>
          <p className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Discover AI Agents in Action
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Get a glimpse of how our AI agents are transforming various industries with smart solutions.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {videos.map((video, index) => (
            <div
              key={video.title}
              className="relative rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative pb-[56.25%]">
                {/* Placeholder for YouTube video */}
                <div id={`player-${index}`} className="absolute inset-0 w-full h-full" />
              </div>
            
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{video.description}</p>
              </div>
              {/* <a
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center text-sm font-semibold text-indigo-600"
              >
                Watch Full Video
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
