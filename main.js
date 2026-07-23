// Configuration
const TOTAL_FRAMES = 192;
const getFramePath = (index) => {
  const paddedIndex = String(index).padStart(5, '0');
  return `./frames/frame_${paddedIndex}.png`;
};

// DOM Elements
const canvas = document.getElementById('animation-canvas');
const ctx = canvas.getContext('2d', { alpha: false });
const loaderOverlay = document.getElementById('loader-overlay');
const loaderPercentage = document.getElementById('loader-percentage');
const ringProgress = document.getElementById('ring-progress');
const uiOverlay = document.getElementById('ui-overlay');
const progressBarFill = document.getElementById('scroll-progress-bar');
const currentFrameText = document.getElementById('current-frame-text');
const totalFramesText = document.getElementById('total-frames-text');

// State
const images = new Array(TOTAL_FRAMES);
let imagesLoaded = 0;
let currentFrameIndex = 0;
let targetFrameIndex = 0;
let isLoaded = false;

// Preload Images
function preloadImages() {
  totalFramesText.textContent = String(TOTAL_FRAMES);

  return new Promise((resolve) => {
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);

      img.onload = () => {
        images[i] = img;
        imagesLoaded++;
        updateLoadingProgress(imagesLoaded / TOTAL_FRAMES);

        if (imagesLoaded === TOTAL_FRAMES) {
          resolve();
        }
      };

      img.onerror = () => {
        console.error(`Failed to load image at index ${i}: ${img.src}`);
        imagesLoaded++;
        updateLoadingProgress(imagesLoaded / TOTAL_FRAMES);
        if (imagesLoaded === TOTAL_FRAMES) {
          resolve();
        }
      };
    }
  });
}

// Update Radial Loading Indicator
function updateLoadingProgress(ratio) {
  const percent = Math.floor(ratio * 100);
  loaderPercentage.textContent = `${percent}%`;
  
  // Ring radius r=42, circumference ~264
  const circumference = 264;
  const offset = circumference - ratio * circumference;
  ringProgress.style.strokeDashoffset = offset;
}

// Setup Canvas Size with HiDPI & Supersampled resolution support
function resizeCanvas() {
  // Use at least 2x supersampling or native DPR for ultra sharp resolution
  const dpr = Math.max(window.devicePixelRatio || 1, 2);
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  
  // CSS viewport scaling
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  // Reset transform and apply DPR scale
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(dpr, dpr);

  // Maximum quality interpolation settings
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  renderFrame(Math.round(currentFrameIndex));
}

// High Quality Image Fit Rendering (Contain/Cover fit)
function renderFrame(index) {
  if (!images[index] || !images[index].complete) return;

  const img = images[index];
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Re-enforce high quality smoothing settings
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  // Apply subtle contrast & sharpness filter for ultra crisp frames
  ctx.filter = 'contrast(1.04) saturate(1.04) brightness(1.02)';

  // Clear background
  ctx.fillStyle = '#060608';
  ctx.fillRect(0, 0, width, height);

  // Aspect ratio math (Cover mode to fill screen sharply)
  const imgRatio = img.naturalWidth / img.naturalHeight;
  const screenRatio = width / height;

  let drawWidth, drawHeight, offsetX, offsetY;

  if (screenRatio > imgRatio) {
    drawWidth = width;
    drawHeight = width / imgRatio;
    offsetX = 0;
    offsetY = (height - drawHeight) / 2;
  } else {
    drawWidth = height * imgRatio;
    drawHeight = height;
    offsetX = (width - drawWidth) / 2;
    offsetY = 0;
  }

  // Draw scaled frame image with maximum fidelity
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

// Calculate target frame from scroll position
function updateScrollTarget() {
  const scrollWrapper = document.getElementById('scroll-wrapper');
  const maxScroll = Math.max(1, scrollWrapper.clientHeight - window.innerHeight);
  const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
  const currentScroll = Math.max(0, Math.min(scrollTop, maxScroll));
  
  const scrollFraction = currentScroll / maxScroll;
  targetFrameIndex = scrollFraction * (TOTAL_FRAMES - 1);

  // Instant render update if loop hasn't kicked in
  const roundedFrame = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(targetFrameIndex)));
  updateUI(roundedFrame, scrollFraction);
}

// Smooth Animation Loop (LERP for ultra liquid scroll motion)
function renderLoop() {
  const diff = targetFrameIndex - currentFrameIndex;

  if (Math.abs(diff) > 0.0001) {
    currentFrameIndex += diff * 0.25;
    const roundedFrame = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(currentFrameIndex)));
    
    renderFrame(roundedFrame);
  }

  requestAnimationFrame(renderLoop);
}

// Update minimal UI progress indicator
function updateUI(frameIndex, scrollRatio) {
  const paddedNumber = String(frameIndex + 1).padStart(3, '0');
  currentFrameText.textContent = `FRAME ${paddedNumber}`;
  progressBarFill.style.width = `${(Math.max(0, Math.min(1, scrollRatio)) * 100).toFixed(1)}%`;
}

// Initialization
async function init() {
  // 1. Preload frame assets with fallback timeout
  const preloadPromise = preloadImages();
  const timeoutPromise = new Promise((res) => setTimeout(res, 3000)); // 3s fallback max
  
  await Promise.race([preloadPromise, timeoutPromise]);
  isLoaded = true;

  // 2. Hide preloader screen & reveal UI
  loaderOverlay.classList.add('fade-out');
  uiOverlay.classList.remove('hidden');

  // 3. Setup canvas dimensions & draw initial frame
  resizeCanvas();
  updateScrollTarget();
  renderFrame(Math.round(targetFrameIndex));

  // 4. Attach event listeners for scroll, wheel, resize, touch
  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('scroll', updateScrollTarget, { passive: true });
  window.addEventListener('wheel', updateScrollTarget, { passive: true });
  window.addEventListener('touchmove', updateScrollTarget, { passive: true });

  // 5. Start smooth 60fps render loop
  requestAnimationFrame(renderLoop);
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
