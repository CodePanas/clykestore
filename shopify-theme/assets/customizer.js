document.addEventListener("DOMContentLoaded", function () {
  const baseImage = document.getElementById("base-product-image");
  const selects = document.querySelectorAll("select");

  // Update the image based on size (simulated by variant name)
  selects.forEach((select) => {
    select.addEventListener("change", () => {
      const selectedOptions = Array.from(selects)
        .map((s) => `${s.name}: ${s.value}`)
        .join(", ");
      // Here you could dynamically change the image if using overlays
      // baseImage.src = 'URLs based on selection';
    });
  });

  // Quantity handling
  const qtyInput = document.getElementById('quantity');
  document.getElementById('increase-qty').addEventListener('click', () => {
    qtyInput.value = parseInt(qtyInput.value || 1) + 1;
  });
  document.getElementById('decrease-qty').addEventListener('click', () => {
    qtyInput.value = Math.max(1, parseInt(qtyInput.value || 1) - 1);
  });

  // Size selection (assumes single option: "Size")
  const variantIdInput = document.getElementById('variant-id');
  const optionButtons = document.querySelectorAll('.option-button');

  optionButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Visually mark as active
      optionButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const selectedValue = button.dataset.value;
      const matchedVariant = variants.find(v =>
        v.option1 === selectedValue
      );

      if (matchedVariant) {
        variantIdInput.value = matchedVariant.id;
      } else {
        console.warn('No variant found for selected option:', selectedValue);
      }
    });
  });

});
