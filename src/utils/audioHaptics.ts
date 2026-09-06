// Web Audio API Synthesizer - 100% local, zero asset downloads, zero network latency

class AudioHapticEngine {
  private ctx: AudioContext | null = null;
  private soundEnabled: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('boc_sound_enabled');
      this.soundEnabled = stored === 'true';
    }
  }

  public isEnabled(): boolean {
    return this.soundEnabled;
  }

  public toggleSound(): boolean {
    this.soundEnabled = !this.soundEnabled;
    if (typeof window !== 'undefined') {
      localStorage.setItem('boc_sound_enabled', String(this.soundEnabled));
      if (this.soundEnabled) {
        this.initContext();
        this.playChime();
      }
    }
    return this.soundEnabled;
  }

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Crisp, lightweight tactile click (analogous to a mechanical key or luxury camera shutter)
   */
  public playClick(freq = 1400) {
    if (!this.soundEnabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.025);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.025);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime);
      osc.stop(this.ctx.currentTime + 0.025);
    } catch {
      // AudioContext might be blocked until user gesture
    }
  }

  /**
   * Delicate silicon chime for theme shifts and milestones
   */
  public playSwitch() {
    this.playClick(1100);
  }

  /**
   * Delicate silicon chime for theme shifts and milestones
   */
  public playChime() {
    if (!this.soundEnabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const notes = [587.33, 880.00]; // D5, A5 crystal fifth

      notes.forEach((freq, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.06);

        gain.gain.setValueAtTime(0.04, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.35);
      });
    } catch {
      // Ignore audio failure
    }
  }

  /**
   * Multi-frequency tactile crunch for the brand Easter Egg
   */
  public playCrunch() {
    if (!this.soundEnabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const freqs = [1800, 2400, 1200, 3200];

      freqs.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, now + idx * 0.03);
        osc.frequency.exponentialRampToValueAtTime(400, now + idx * 0.03 + 0.04);

        gain.gain.setValueAtTime(0.03, now + idx * 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.03 + 0.04);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.03);
        osc.stop(now + idx * 0.03 + 0.04);
      });
    } catch {
      // Ignore
    }
  }

  /**
   * Deep tactile thud for mode changes
   */
  public playThud() {
    if (!this.soundEnabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(90, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime);
      osc.stop(this.ctx.currentTime + 0.06);
    } catch {
      // Ignore
    }
  }
}

export const audioHaptics = new AudioHapticEngine();
