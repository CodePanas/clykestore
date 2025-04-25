
// Simulación de GrowthBook feature flag
const features = {
  frameCustomizer: true, // Puedes cambiar a false para simular el otro escenario
};

function isFeatureEnabled(name) {
  return features[name] === true;
}

document.addEventListener("DOMContentLoaded", () => {
  if (!isFeatureEnabled("frameCustomizer")) {
    const customWrapper = document.querySelector(".custom-product-wrapper");
    if (customWrapper) {
      customWrapper.style.display = "none";
    }
    console.log("Frame Customizer está deshabilitado por feature flag.");
  } else {
    console.log("Frame Customizer activo.");
  }
});
