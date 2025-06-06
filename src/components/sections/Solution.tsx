import { useState, useRef } from 'react';

const Solution = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Introducing Convo Card</h2>
          <p className="text-xl max-w-3xl mx-auto">A revolutionary approach to workplace observations that makes safety engaging, actionable, and rewarding—in any industry.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <video 
                ref={videoRef}
                controls={isPlaying}
                preload="none"
                poster="src/assets/images/Rewarded.png"
                className="rounded-lg shadow-xl w-1/2 mx-auto bg-gray-100"
                style={{ aspectRatio: '9/16' }}
                playsInline
                muted
                onPlay={() => setIsPlaying(true)}
              >
                <source src="src/assets/images/convo-card-example-compressed.mp4" type="video/mp4" />
                Your browser doesn't support video playback.
              </video>
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 rounded-lg"
                  onClick={handlePlay}
                >
                  <div className="bg-white bg-opacity-90 rounded-full p-6 shadow-lg hover:bg-opacity-100 transition-all duration-200">
                    <svg className="w-16 h-16 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-bold mb-4">How It Works</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full p-1 mr-3 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p><strong>Observe</strong>: Workers spot something worth discussing—a potential hazard, improvement opportunity, or any workplace observation.</p>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full p-1 mr-3 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p><strong>Document</strong>: Open Convo Card, categorize the observation, add photos, voice notes, or text details—in seconds.</p>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full p-1 mr-3 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p><strong>Share</strong>: Instantly notify supervisors and relevant team members who need to know.</p>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full p-1 mr-3 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p><strong>Action</strong>: Track responses, resolutions, and follow-ups in one integrated system.</p>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full p-1 mr-3 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p><strong>Reward</strong>: Get recognized and rewarded for contributing to workplace improvement.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;