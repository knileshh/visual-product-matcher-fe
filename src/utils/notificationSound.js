// Generate a pleasant notification sound using Web Audio API
export const playNotificationSound = () => {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create oscillators for a pleasant chord
    const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5 (C major chord)
    const duration = 0.15;
    
    frequencies.forEach((freq, index) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = freq;
      oscillator.type = 'sine'; // Smooth sine wave
      
      // Envelope
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.08, audioContext.currentTime + 0.01); // Soft volume
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
      
      oscillator.start(audioContext.currentTime + (index * 0.02)); // Slight delay for arpeggio effect
      oscillator.stop(audioContext.currentTime + duration);
    });
  } catch (error) {
    console.warn('Could not play notification sound:', error);
  }
};
