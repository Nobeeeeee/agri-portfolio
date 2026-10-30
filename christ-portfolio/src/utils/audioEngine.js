// Silent Audio Engine stub (Audio completely removed per user request)

class SilentAudioEngine {
  constructor() {
    this.isMuted = true;
  }

  init() {}
  toggleSound() { return false; }
  startAmbientDrone() {}
  stopAmbientDrone() {}
  playWhoosh() {}
  playClick() {}
}

export const soundEngine = new SilentAudioEngine();
