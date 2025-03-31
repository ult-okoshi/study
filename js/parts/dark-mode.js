import { SessionModeRepository } from '../session-mode-repository.js';
class DarkMode {
  static initialize() {
    DarkMode.firstMode();
    $('#mode-button').on('click', (event) => {
      event.preventDefault();
      DarkMode.modeSwitch();
    });
  }
  static firstMode() {
    const savedMode = SessionModeRepository.getMode();
    if (savedMode === 'dark') {
      DarkMode.switchButtonDark();
    }
    if (savedMode === 'light') {
      DarkMode.switchButtonLight();
    }
  }
  static modeSwitch() {
    const savedMode = SessionModeRepository.getMode();
    if (savedMode === 'light') {
      DarkMode.switchButtonDark();
      SessionModeRepository.save('dark');
    }
    if (savedMode === 'dark') {
      DarkMode.switchButtonLight();
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
  DarkMode.initialize();
});