document.addEventListener('DOMContentLoaded', function() {
  const videoGrid = document.getElementById('video-grid');
  const videoPaths = [
    "FINAL-19_00001.mp4",
    "FINAL-25_00001.mp4",
    "FINAL-43_00001.mp4",
    "FINAL-5_00001.mp4",
    "FINAL-68_00001.mp4",
    "FINAL-9_00001.mp4",
    "FINAL-22_00001.mp4",
    "FINAL-30_00001.mp4",
    "FINAL-48_00001.mp4",
    "FINAL-62_00001.mp4",
    "FINAL-73_00001.mp4",
    "Interpol-Video_00021.mp4",
  ];

  const videoPrompts = [
    "A cloud in the shape of a teacup.",
    "A panda standing on a surfboard, in the ocean in sunset,  4k, high resolution.",
    "A girl with a hairband performing a song with her guitar on a warm evening at a local market, children's story book.",
    "A medieval witch making a poison.",
    "A group of mongooses scuttle about, set against a desert backdrop, bathed in bright and warm earth tones.",
    "A monkey making latte art.",
    "A fat rabbit wearing a purple robe walking through a fantasy landscape.",
    "An old-fashioned windmill surrounded by flowers, 3D design.",
    "A strong American cowboy with dark skin stands in front of a chair.",
    "A polar bear is playing guitar.",
    "At a tranquil lake, a white swan gracefully glides on the surface, its reflection dancing on the water, seen in a medium shot.",
    "A young, beautiful girl in a pink dress is playing piano gracefully.",
  ];

  videoPaths.forEach((path, index) => {
    const videoItem = document.createElement('div');
    videoItem.classList.add('video-item');

    const video = document.createElement('video');
    video.src = `T2V/${path}`;
    video.loop = true;
    video.muted = true;
    video.setAttribute('playsinline', ''); // For autoplay on mobile browsers
    videoItem.appendChild(video);

    // Try to play the video after appending to the DOM
    video.play().catch(e => console.error('Error trying to play video:', e));

    const prompt = document.createElement('div');
    prompt.classList.add('prompt');
    prompt.textContent = videoPrompts[index];
    videoItem.appendChild(prompt);

    videoGrid.appendChild(videoItem);
  });
});
