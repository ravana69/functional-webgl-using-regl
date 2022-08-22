const d = document;
const $code = qS => d.getElementById(qS).textContent;
const regl = createREGL();

// In a draw call, we can pass the shader source code to regl
const draw = regl({
  frag: $code`frag`,
  vert: $code`vert`,
  attributes: {
    position: [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, -1],
    [-1, 1],
    [1, 1]] },



  uniforms: {
    time: ({ tick }) => tick * .05,
    color: regl.prop('color'),
    aspect: context => context.viewportWidth / context.viewportHeight },


  count: 6 });



regl.frame(context => {

  regl.clear({
    color: [0, 0, 0, 1],
    depth: 1 });


  draw();

});