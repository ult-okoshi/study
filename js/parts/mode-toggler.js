import { SessionModeRepository } from '../session-mode-repository.js';
class ModeToggler {
  static initialize() {
    ModeToggler.initializeMode();
    $('#mode-button').on('click', (event) => {
      event.preventDefault();
      ModeToggler.toggleMode();
    });
  }
  static initializeMode() {
    const savedMode = SessionModeRepository.getMode();
    if (savedMode === 'dark') {
      ModeToggler.switchButtonDark();
      return;
    }
    if (savedMode === 'light') {
      ModeToggler.switchButtonLight();
      return;
    }
  }
  static toggleMode() {
    const savedMode = SessionModeRepository.getMode();
    if (savedMode === 'light') {
      ModeToggler.switchButtonDark();
      SessionModeRepository.save('dark');
    }
    if (savedMode === 'dark') {
      ModeToggler.switchButtonLight();
      SessionModeRepository.save('light');
    }
  }
  static switchButtonLight() {
    const switchButton = document.getElementById('mode-button');
    document.querySelectorAll('body, textarea, input').forEach((element) => {
      element.classList.remove('dark-mode');
    });
    switchButton.value = 'ダークモード';
  }
  static switchButtonDark() {
    const switchButton = document.getElementById('mode-button');
    document.querySelectorAll('body, textarea, input').forEach((element) => {
      element.classList.add('dark-mode');
    });
    switchButton.value = 'ライトモード';
  }
}

$(document).ready(function() {
  ModeToggler.initialize();
});