<template>
    <svg
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
      width="232.81508mm"
      height="354.30725mm"
      viewBox="0 0 232.81507 354.30725"
      version="1.1"
      id="svg882"
      inkscape:version="0.92.3 (unknown)"
      sodipodi:docname="coloredlock.svg">
      <defs id="defs876"/>
      <metadata id="metadata879">
        <rdf:RDF>
          <cc:Work rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
            <dc:title></dc:title>
          </cc:Work>
        </rdf:RDF>
      </metadata>
      <g id="layer1" transform="translate(954.00275,353.37982)">
        <g id="g1702" transform="matrix(5.5432163,0,0,5.5432163,-502.926,-208.84553)">
          <g transform="translate(-156.96684,52.326139)" id="g2128-5">
            <g id="g2349">
              <g transform="matrix(0.13229589,0,0,0.13708752,44.310737,-71)" id="lock-arm-holder">
                <path
                  style="fill:#b6bbc1;fill-opacity:1"
                  d="M 326.019,285.578 V 128.146 c 0,-37.874 29.963,-69.597 67.83,-70.316 38.748,-0.736 70.505,30.57 70.505,69.154 v 49.119 c 0,8.994 7.291,16.284 16.284,16.284 h 15.078 c 8.993,0 16.284,-7.291 16.284,-16.284 V 128.474 C 512,64.163 460.647,10.8 396.339,10.177 331.401,9.548 278.373,62.189 278.373,126.984 v 158.593 h 47.646 z"
                  id="lock-arm"
                  v-bind:class="{ lockedArm: isLocked, unlockedArm: !isLocked }">
              </path>
              </g>
              <g id="lock-body" transform="translate(-117.28192,-116.3273)">
                <rect id="sun-body" height="32" width="42" style="fill:#ededed;fill-opacity:1;stroke-width:1" y="69.844345" x="192.87421"/>
                <rect id="shaded-body" height="32" width="21" style="fill:#d9d9db;fill-opacity:1;stroke-width:1" y="69.844345" x="213.87421"/>
                <polygon
                  transform="translate(184.8742,43.844344)"
                  id="shaded-color"
                  v-bind:class="{ shadeRed: isLocked, shadeGreen: !isLocked }"
                  points="49,50.586 49,47 43.414,47 33.414,57 42.586,57 "
                  style="fill-opacity:1"/>
                <polygon transform="translate(184.8742,43.844344)" id="sun-grey" points="9,47 9,54.586 16.586,47 " style="fill:#b1b1bc;fill-opacity:1"/>
                <polygon transform="translate(184.8742,43.844344)" id="shaded-split" points="40.586,47 31.414,47 21.414,57 30.586,57 " style="fill:#a7a7af;fill-opacity:1"/>
                <path
                  id="sun-color"
                  v-bind:class="{ sunRed: isLocked, sunGreen: !isLocked }"
                  d="m 213.4602,90.844344 h -9.172 l -9.707,9.707006 c -0.195,0.195 -0.451,0.29299 -0.707,0.29299 h 9.586 z"
                  style="fill-opacity:1;stroke-width:1"/>
                <polygon transform="translate(184.8742,43.844344)" id="shaded-grey" points="49,57 49,53.414 45.414,57 " style="fill:#a7a7af;fill-opacity:1"/>
                <polygon transform="translate(184.8742,43.844344)" id="sun-split" points="29,49.414 21.414,57 29,57 " style="fill:#b1b1bc;fill-opacity:1"/>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
</template>

<script>
export default {
  name: 'Lock',
  data () {
    return {
      isLocked: true
    }
  }
}
</script>

<style scoped>
svg {
  height: 100%;
  width: 100%;
  cursor: pointer;
}
#shaded-color, #sun-color {
  transition: fill 500ms ease;
}
#lock-arm {
  transition: transform 500ms ease;
}
.shadeGreen {
  fill: #58bc2d;
}
.sunGreen {
  fill: #69d13c;
}
.shadeRed {
  fill: #d13c3c;
}
.sunRed {
  fill: #d64444;
}
.lockedArm {
  transform: translateY(0px);
}
.unlockedArm {
  transform: translateY(-50px);
}

svg:hover .shadeGreen {
  fill: #d13c3c;
}
svg:hover .sunGreen {
  fill: #d64444;
}
svg:hover .shadeRed {
  fill: #58bc2d;
}
svg:hover .sunRed {
  fill: #69d13c;
}
svg:hover .lockedArm{
  transform: translateY(-50px);
}
svg:hover .unlockedArm{
  transform: translateY(0px);
}


</style>
