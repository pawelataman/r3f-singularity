varying vec3 vPosition;
varying vec3 vNormal;
varying float vFresnel;
void main() {
    vec3 newPosition = position;

    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    gl_Position = projectionMatrix * viewPosition;

    vec4 modelNormal = normalize(modelMatrix * vec4(normal, 0.0));

    vec3 viewDirection = normalize(cameraPosition - modelPosition.xyz);
    float fresnel = dot(viewDirection, modelNormal.xyz);

    vPosition = modelPosition.xyz;
    vNormal = modelNormal.xyz;
    vFresnel = fresnel;

}