
document.addEventListener("DOMContentLoaded", function () {
  const baseImage = document.getElementById("base-product-image");
  const selects = document.querySelectorAll("select");

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

  console.log("Customizer JS cargado.");
});
