
document.addEventListener("DOMContentLoaded", function () {
  const baseImage = document.getElementById("base-product-image");
  const selects = document.querySelectorAll("select");

  const quantityInput = document.getElementById("quantity");
  const increaseBtn = document.getElementById("increase-qty");
  const decreaseBtn = document.getElementById("decrease-qty");

  // Actualiza la imagen según la talla (simulado por nombre de variante)
  selects.forEach((select) => {
    select.addEventListener("change", () => {
      const selectedOptions = Array.from(selects)
        .map((s) => `${s.name}: ${s.value}`)
        .join(", ");
      console.log("Opciones seleccionadas:", selectedOptions);

      // Aquí podrías cambiar dinámicamente la imagen si estuvieras usando overlays
      // baseImage.src = 'URL basadas en selección';
    });
  });

  increaseBtn.addEventListener("click", () => {
    let current = parseInt(quantityInput.value) || 1;
    quantityInput.value = current + 1
  })

  decreaseBtn.addEventListener("click", () => {
    let current = parseInt(quantityInput.value) || 1;
    if (current > 1) {
      quantityInput.value = current - 1;
    }
  });

  console.log("Customizer JS cargado.");
});
