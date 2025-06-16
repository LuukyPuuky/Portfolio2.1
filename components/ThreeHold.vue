<template>
  <TresCanvas v-bind="gl" class="w-full h-full">
    <!-- Camera -->
    <TresPerspectiveCamera
      ref="cameraRef"
      :args="[45, 1, 0.25, 20]"
      :position="[-1.8, 0.6, 2.7]"
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
      :min-distance="2"
      :max-distance="10"
      :target="[0, 0, -0.2]"
      :enable-damping="true"
      :damping-factor="0.05"
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
const modelUrl =
  "https://cdn.jsdelivr.net/gh/mrdoob/three.js@master/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf"; // Default model

const cameraRef = ref();

// Event handlers
function onModelLoad(gltf) {
  console.log("Model loaded successfully:", gltf);
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
