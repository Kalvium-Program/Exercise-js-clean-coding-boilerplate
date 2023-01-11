function canDrive(age, fuel) {
    if (age > 18 && fuel > 0) {
      return 'The person can drive the car!';
    } else {
      return 'Cannot Drive !';
    }
  }
  
  // challenge 2:
  
  function getArea(shape, width, height, radius) {
    if (shape === 'circle') {
      return Math.PI * radius * radius;
    } else if (shape === 'square') {
      return width * width;
    } else if (shape === 'rectangle') {
      return width * height;
    }
  }
  