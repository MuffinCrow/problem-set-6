/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  ctx.font = '48px sans-serif';
  ctx.strokeText('Hello, World!', 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  let height;
  let width;
  let y;
  let x;
  let invalid = 0;
  height = Number(prompt("Height:"));
  width = Number(prompt("Width:"));
  x = Number(prompt("X:"));
  y = Number(prompt("Y:"));
  if (width < 1) {
    invalid = 0;
  }else if (height < 1) {
    invalid = 1;
  }else if (x < 5) {
    invalid = 2;
  }else if (y < 5) {
    invalid = 3;
  }else if (((x + width) > 1024) || ((y + height) > 512)) {
    invalid = 4;
  }else if (isNaN(x || y || width || height)) {
    invalid = 5;
  }else {
    invalid = 6;
  }

  switch (invalid) {
    case 0:
      alert("Your width is too small.");
      break;
    case 1:
      alert("Your height is too small.");
      break;
    case 2:
      alert("Your x-coordinate is too small.");
      break;
    case 3:
      alert("Your y-coordinate is too small.");
      break;
    case 4:
      alert("The rectangle will not fit on the canvas.");
      break;
    case 5:
      alert("One of your inputs is not a number.")
      break;
    case 6:
      const canvas = document.getElementById('canvas2');
      const ctx = canvas.getContext('2d');
      ctx.strokeRect(x, y, width, height);
  }

}
/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  const canvas = document.getElementById('canvas3');
  const ctx = canvas.getContext('2d');
  let color = prompt("Color:");
  switch (color) {
    case 'black':
      ctx.fillStyle = 'black';
      ctx.fillRect(10, 10, 100, 50);
      break;
    case 'Black':
      ctx.fillStyle = 'black';
      ctx.fillRect(10, 10, 100, 50);
      break;
    case 'blue':
      ctx.fillStyle = 'blue';
      ctx.fillRect(10, 10, 100, 50);
      break;
    case 'Blue':
      ctx.fillStyle = 'blue';
      ctx.fillRect(10, 10, 100, 50);
      break;
    case 'green':
      ctx.fillStyle = 'green';
      ctx.fillRect(10, 10, 100, 50);
      break;
    case 'Green':
      ctx.fillStyle = 'green';
      ctx.fillRect(10, 10, 100, 50);
      break;
    case 'orange':
      ctx.fillStyle = 'orange';
      ctx.fillRect(10, 10, 100, 50);
      break;
    case 'Orange':
      ctx.fillStyle = 'orange';
      ctx.fillRect(10, 10, 100, 50);
      break;
    case 'purple':
      ctx.fillStyle = 'purple';
      ctx.fillRect(10, 10, 100, 50);
      break;
    case 'Purple':
      ctx.fillStyle = 'purple';
      ctx.fillRect(10, 10, 100, 50);
      break;
    case 'red':
      ctx.fillStyle = 'red';
      ctx.fillRect(10, 10, 100, 50);
      break;
    case 'Red':
      ctx.fillStyle = 'red';
      ctx.fillRect(10, 10, 100, 50);
      break;
    case 'Yellow':
      ctx.fillStyle = 'yellow';
      ctx.fillRect(10, 10, 100, 50);
      break;
    case 'yellow':
      ctx.fillStyle = 'yellow';
      ctx.fillRect(10, 10, 100, 50);
      break;
    default:
      alert("The color entered is an unsupported color.")
      break;
  }

}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  const canvas = document.getElementById('canvas4');
  const ctx = canvas.getContext('2d');
  let s1 = Number(prompt("Side 1:"));
  let s2 = Number(prompt("Side 2:"));
  let s3 = Number(prompt("Side 3:"));
  console.log(s1);
  console.log(s2);
  console.log(s3);
  if (isNaN(s1)) {
    alert("One of your inputs is not a number.");
  }else if (isNaN(s2)) {
    alert("One of your inputs is not a number.");
  }else if (isNaN(s3)) {
    alert("One of your inputs is not a number.");
  }else if (Number.isInteger(s1) == false) {
    alert("That is not a valid right triangle.");
  }else if (Number.isInteger(s2) == false) {
    alert("That is not a valid right triangle.");
  }else if (Number.isInteger(s3) == false) {
    alert("That is not a valid right triangle.");
  }else if (s1 > 502 || s1 <= 0 || s1 > s2 || s1 > s3) {
    alert("That is not a valid right triangle.");
  }else if (s2 > 1014 || s2 < s1 || s2 > s3) {
    alert("That is not a valid right triangle.");
  }else if ((s1 * s1) + (s2 * s2) != (s3 * s3)) {
    alert("That is not a valid right triangle.");
  }else if ((s1 * s1) + (s2 * s2) == (s3 * s3)) {
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(10, (s1 + 10));
    ctx.lineTo((s2 + 10), (s1 + 10));
    ctx.closePath();
    ctx.stroke();
  }else{
    alert("That is not a valid right triangle.");
  }
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  const canvas = document.getElementById('canvas5');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
       let radii = Number(prompt("Radius:"));
       if (radii >= 251) {
         alert("The smiley face will not fit on the canvas.");
       } else if (radii <= 0) {
         alert ("Your radius is too small.");
       } else if (isNaN(radii)) {
         alert("Your input is not a number.");
       } else {
         let condition = (radii / 100);
         let opposite = (radii * 2 + 10);
         let third = (radii * 2 / 3 + 10);
         let second = (radii * 2 / 3 * 2 + 10);
               ctx.beginPath();
               ctx.arc((radii + 10), (radii + 10), radii, 0, Math.PI * 2, true); // Outer circle
               ctx.stroke();
               ctx.closePath();

               ctx.moveTo(opposite, (radii + 10));

               ctx.beginPath();
               ctx.arc((radii + 10), (radii + 10), (radii * 0.7), 0, Math.PI, false);  // Mouth (clockwise)
               ctx.stroke();
               ctx.closePath();

               ctx.moveTo(third, radii);

               ctx.beginPath();
               ctx.arc(third, (radii * 0.7 + 10), (radii * 0.1), 0, Math.PI * 2, true);
               ctx.stroke();
               ctx.closePath();

               ctx.moveTo(second, radii);

               ctx.beginPath();
               ctx.arc(second, (radii * 0.7 + 10), (radii * 0.1), 0, Math.PI * 2, true);
               ctx.stroke();
               ctx.closePath();
       }
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  const canvas = document.getElementById('canvas6');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let outer = Math.floor(Number(prompt("Outer Radius:")));
  let inner = Math.floor(Number(prompt("Inner Radius:")));
  if (isNaN(outer) || isNaN(inner)) {
    alert("One of your inputs is not a number.");
  } else if (outer <= inner) {
    alert("Your outer radius must be larger than your inner radius.");
  } else {
    ctx.moveTo(125, 125 - outer);
    let x = 1.5;

    for (let i = 0 ; i < 5; i++) {
      x += 0.2;
      ctx.lineTo((inner * Math.cos(x * Math.PI)) + 125, (inner * Math.sin(x * Math.PI)) + 125);
      x += 0.2;
      ctx.lineTo((outer * Math.cos(x * Math.PI)) + 125, (outer * Math.sin(x * Math.PI)) + 125);
    }

    ctx.stroke();
  }
}


//https://math.stackexchange.com/questions/2135982/math-behind-creating-a-perfect-star
/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  const canvas = document.getElementById('canvas7');
  const ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(67, 10);
  ctx.lineTo(147, 10);
  ctx.lineTo(204, 67);
  ctx.lineTo(204, 147);
  ctx.lineTo(147, 204);
  ctx.lineTo(67, 204);
  ctx.lineTo(10, 147);
  ctx.lineTo(10, 67);
  ctx.lineTo(67, 10);
  ctx.stroke();
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();

  ctx.font = "65px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText("STOP", 107, 127);
}
/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  const canvas = document.getElementById('canvas8');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let input = Math.floor(Number(prompt("Length:")));
  if (input > 100) {
    alert("The pyramid will not fit on the canvas.");
  } else if (isNaN(input)) {
    alert("Your input is not a number.");
  }else{

  let half = (input / 2);

  ctx.strokeRect(10, (502 - input), input, input);
  ctx.strokeRect((10 + input), (502 - input), input, input);
  ctx.strokeRect((10 + (input * 2)), (502 - input), input, input);
  ctx.strokeRect((10 + (input * 3)), (502 - input), input, input);
  ctx.strokeRect((10 + (input * 4)), (502 - input), input, input);

  ctx.strokeRect((10 + half), (502 - (input * 2)), input, input);
  ctx.strokeRect((10 + (half * 3)), (502 - (input * 2)), input, input);
  ctx.strokeRect((10 + (half * 5)), (502 - (input * 2)), input, input);
  ctx.strokeRect((10 + (half * 7)), (502 - (input * 2)), input, input);

  ctx.strokeRect((10 + input), (502 - (input * 3)), input, input);
  ctx.strokeRect((10 + (input * 2)), (502 - (input * 3)), input, input);
  ctx.strokeRect((10 + (input * 3)), (502 - (input * 3)), input, input);

  ctx.strokeRect((10 + (half * 3)), (502 - (input * 4)), input, input);
  ctx.strokeRect((10 + (half * 5)), (502 - (input * 4)), input, input);

  ctx.strokeRect((10 + (input * 2)), (502 - (input * 5)), input, input);

}
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  const canvas = document.getElementById('canvas9');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 2;


  ctx.beginPath();
  ctx.moveTo(512, 10);
  ctx.lineTo(150, 260);
  ctx.lineTo(850, 260);
  ctx.lineTo(512, 10);
  ctx.stroke();
  ctx.fillStyle = "gray";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStlye = "#FF0000";
  ctx.moveTo(150, 260);
  ctx.lineTo(150, 750);
  ctx.lineTo(850, 750);
  ctx.lineTo(850, 260);
  ctx.lineTo(150, 260);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

}
