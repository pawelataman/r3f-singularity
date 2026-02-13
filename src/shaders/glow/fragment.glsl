varying vec3 vPosition;
varying vec3 vNormal;
varying float vFresnel;

void main() {
    float fresnel = 1.0 - vFresnel;
    fresnel = smoothstep(0.5, .8, fresnel) * 2.0;

    vec3 color1 = vec3(0.0);
    vec3 color2 = vec3(1.0, 0.0, 0.0);
    vec3 color = mix(color1, color2, fresnel) * 4.0;

    gl_FragColor = vec4(color, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}