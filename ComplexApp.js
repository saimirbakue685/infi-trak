// Filename: ComplexApp.js
// Description: A complex JavaScript application that simulates a digital camera control panel

/*** Model ***/
class Camera {
  constructor() {
    this.powerOn = false;
    this.mode = 'auto';
    this.zoomLevel = 0;
    this.brightLevel = 50;
    this.exposure = 0;
    this.images = [];
  }

  togglePower() {
    this.powerOn = !this.powerOn;
    console.log(`Camera is ${this.powerOn ? 'on' : 'off'}`);
  }

  setMode(mode) {
    if (['auto', 'manual', 'portrait', 'landscape'].includes(mode)) {
      this.mode = mode;
      console.log(`Mode set to ${mode}`);
    } else {
      console.log('Invalid mode!');
    }
  }

  zoomIn() {
    this.zoomLevel++;
    console.log(`Zoom level: ${this.zoomLevel}`);
  }

  zoomOut() {
    if (this.zoomLevel > 0) {
      this.zoomLevel--;
      console.log(`Zoom level: ${this.zoomLevel}`);
    } else {
      console.log('Already at minimum zoom level');
    }
  }

  brightnessUp() {
    if (this.brightLevel < 100) {
      this.brightLevel += 10;
      console.log(`Brightness level: ${this.brightLevel}`);
    } else {
      console.log('Maximum brightness reached');
    }
  }

  brightnessDown() {
    if (this.brightLevel > 0) {
      this.brightLevel -= 10;
      console.log(`Brightness level: ${this.brightLevel}`);
    } else {
      console.log('Minimum brightness reached');
    }
  }

  adjustExposure(value) {
    if (value < -2 || value > 2) {
      console.log('Invalid exposure adjustment');
    } else {
      this.exposure += value;
      console.log(`Exposure adjusted by ${value}`);
    }
  }

  captureImage() {
    if (this.powerOn) {
      const image = new Image();
      image.captureTime = new Date();
      image.mode = this.mode;
      image.zoomLevel = this.zoomLevel;
      image.brightLevel = this.brightLevel;
      image.exposure = this.exposure;
      this.images.push(image);
      console.log('Image captured');
    } else {
      console.log('Cannot capture image. Camera is off');
    }
  }

  displayImages() {
    console.log(`Total Images: ${this.images.length}`);
    this.images.forEach((image, index) => {
      console.log(`Image ${index + 1}:`);
      console.log(`  - Capture Time: ${image.captureTime}`);
      console.log(`  - Mode: ${image.mode}`);
      console.log(`  - Zoom Level: ${image.zoomLevel}`);
      console.log(`  - Brightness Level: ${image.brightLevel}`);
      console.log(`  - Exposure: ${image.exposure}`);
    });
  }
}

/*** View ***/
const cameraView = {
  renderPowerButton: () => {
    const powerButton = document.createElement('button');
    powerButton.textContent = 'Power';
    powerButton.addEventListener('click', () => {
      camera.togglePower();
    });
    return powerButton;
  },

  renderModeButtons: () => {
    const modes = ['auto', 'manual', 'portrait', 'landscape'];
    const modeButtons = document.createElement('div');
    modes.forEach((mode) => {
      const button = document.createElement('button');
      button.textContent = mode;
      button.addEventListener('click', () => {
        camera.setMode(mode);
      });
      modeButtons.appendChild(button);
    });
    return modeButtons;
  },

  renderZoomButtons: () => {
    const zoomButtons = document.createElement('div');
    const zoomInButton = document.createElement('button');
    zoomInButton.textContent = 'Zoom In';
    zoomInButton.addEventListener('click', () => {
      camera.zoomIn();
    });
    const zoomOutButton = document.createElement('button');
    zoomOutButton.textContent = 'Zoom Out';
    zoomOutButton.addEventListener('click', () => {
      camera.zoomOut();
    });
    zoomButtons.appendChild(zoomInButton);
    zoomButtons.appendChild(zoomOutButton);
    return zoomButtons;
  },

  renderBrightnessButtons: () => {
    const brightnessButtons = document.createElement('div');
    const brightnessUpButton = document.createElement('button');
    brightnessUpButton.textContent = 'Brightness Up';
    brightnessUpButton.addEventListener('click', () => {
      camera.brightnessUp();
    });
    const brightnessDownButton = document.createElement('button');
    brightnessDownButton.textContent = 'Brightness Down';
    brightnessDownButton.addEventListener('click', () => {
      camera.brightnessDown();
    });
    brightnessButtons.appendChild(brightnessUpButton);
    brightnessButtons.appendChild(brightnessDownButton);
    return brightnessButtons;
  },

  renderExposureButtons: () => {
    const exposureButtons = document.createElement('div');
    const decreaseExposureButton = document.createElement('button');
    decreaseExposureButton.textContent = 'Decrease Exposure';
    decreaseExposureButton.addEventListener('click', () => {
      camera.adjustExposure(-1);
    });
    const increaseExposureButton = document.createElement('button');
    increaseExposureButton.textContent = 'Increase Exposure';
    increaseExposureButton.addEventListener('click', () => {
      camera.adjustExposure(1);
    });
    exposureButtons.appendChild(decreaseExposureButton);
    exposureButtons.appendChild(increaseExposureButton);
    return exposureButtons;
  },

  renderCaptureButton: () => {
    const captureButton = document.createElement('button');
    captureButton.textContent = 'Capture Image';
    captureButton.addEventListener('click', () => {
      camera.captureImage();
    });
    return captureButton;
  },

  renderDisplayButton: () => {
    const displayButton = document.createElement('button');
    displayButton.textContent = 'Display Images';
    displayButton.addEventListener('click', () => {
      camera.displayImages();
    });
    return displayButton;
  },

  render: () => {
    const container = document.createElement('div');
    container.appendChild(cameraView.renderPowerButton());
    container.appendChild(cameraView.renderModeButtons());
    container.appendChild(cameraView.renderZoomButtons());
    container.appendChild(cameraView.renderBrightnessButtons());
    container.appendChild(cameraView.renderExposureButtons());
    container.appendChild(cameraView.renderCaptureButton());
    container.appendChild(cameraView.renderDisplayButton());
    return container;
  }
};

/*** Controller ***/
const camera = new Camera();
const appContainer = document.getElementById('app');
appContainer.appendChild(cameraView.render());