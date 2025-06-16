<template>
  <TresCanvas v-bind="gl" class="w-full h-full">
    <!-- Camera -->
    <TresPerspectiveCamera
      ref="cameraRef"
      :args="[45, 1, 0.25, 20]"
      :position="[2, 2, 8]"
    />
    <!-- Environment (lighting only, no background) -->
    <Suspense>
      <Environment :files="environmentUrl" :background="false" />
    </Suspense>
    <!-- GLTF Model -->
    <Suspense>
      <template #default>
        <GLTFModel
          :path="modelUrl"
          @load="onModelLoad"
          @progress="onProgress"
          @error="onError"
        />
      </template>
      <template #fallback>
        <!-- Loading placeholder -->
        <TresMesh>
          <TresBoxGeometry :args="[1, 1, 1]" />
          <TresMeshBasicMaterial color="gray" />
        </TresMesh>
      </template>
    </Suspense>
    <!-- Controls -->
    <OrbitControls
      :min-distance="3"
      :max-distance="20"
      :target="[0, 0, 0]"
      :enable-damping="true"
      :damping-factor="0.05"
      :enable-pan="true"
      :pan-speed="1"
      :rotate-speed="1"
      :zoom-speed="1"
      :screen-space-panning="true"
    />
  </TresCanvas>
</template>

<script setup>
import { TresCanvas } from "@tresjs/core";
import { OrbitControls, GLTFModel, Environment } from "@tresjs/cientos";
import { ref, reactive } from "vue";
import * as THREE from "three";

// Reactive WebGL settings
const gl = reactive({
  antialias: true,
  alpha: true, // Enable transparency
  toneMapping: THREE.ACESFilmicToneMapping,
  toneMappingExposure: 1,
  outputColorSpace: THREE.SRGBColorSpace,
});

// URLs for assets
const environmentUrl =
  "https://cdn.jsdelivr.net/gh/mrdoob/three.js@master/examples/textures/equirectangular/royal_esplanade_1k.hdr";
const modelUrl = "/model/testhold3compressed.glb"; // Default model

const cameraRef = ref();

// Event handlers
function onModelLoad(gltf) {
  console.log("Model loaded successfully:", gltf);

  // Auto-fit camera to model
  const box = new THREE.Box3().setFromObject(gltf.scene);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());

  // Calculate ideal camera distance
  const maxDim = Math.max(size.x, size.y, size.z);
  const fov = cameraRef.value.fov * (Math.PI / 180);
  const cameraDistance = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.5;

  // Position camera in front of the model, panned right and zoomed out, looking down
  cameraRef.value.position.set(
    center.x + 2,
    center.y + 2,
    center.z + cameraDistance * 1.5
  );
  cameraRef.value.lookAt(center);

  // Update OrbitControls target
  const controls = cameraRef.value.parent.getObjectByName("OrbitControls");
  if (controls) {
    controls.target.copy(center);
    controls.update();
  }
}

function onProgress(progress) {
  console.log(
    "Loading progress:",
    (progress.loaded / progress.total) * 100 + "%"
  );
}

function onError(error) {
  console.error("Error loading model:", error);
}
</script>
