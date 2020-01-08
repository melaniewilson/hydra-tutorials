/*
Here is a quick example on how to use video in Hydra.
This tutorial assumes you are using Atom to generate visuals.

Important: To run this, you will need to run each segment seperately first. After you have done that,
you can add whatever effects you want. I have added some effects below to showcase that.
Remove the "//" and run it so that you can seehow it is manipulated.
If you want to add or remove effects to the video (segment 3), you do not need to re-run segment 1 and segment 2.
It is in memory. You will however need to re-run segment 3 to pick up the added or removed effects.

Quick note about running videos: They use a lot of CPU as you can imagine. It is best to format videos prior to runing them through Hydra.
I change them to lower definition. You will see that when your run them, over time your system will slow down.
During live performances, I have had to start and stop Hydra. This is not ideal. I am still investating this and will
update once I know more.
*/

//segment 1 - create a variable
vid = document.createElement('video')
vid.autoplay = true
vid.loop = true
//insert the file path of the video so that atom can locate it. You need to use .getPaths as indicated below.
vid.src = atom.project.getPaths()[0]+'/sampleVideo/flower.MOV'

//segment 2 -this loads the video by initializing it. I have set the following
s1.init(
  {
    src: vid, // Add the variable that holds element. This was created above.
    dynamic: true   // Set true for video and false for images.
  }
)

//segment 3 - push the video in a src
src(s1)
  //.pixelate(100)
  //.rotate(0.2,0.2)
  .hue(0.9)
  .posterize(6)
.out(o0)
