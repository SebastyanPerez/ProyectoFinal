document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los checkboxes de "Todos" (para precios, colores y marcas)
    const allCheckboxGroups = document.querySelectorAll("[id$='-all']"); // Checkboxes como "Todos"
  
    // Agregar eventos a los checkboxes de "Todos"
    allCheckboxGroups.forEach((checkboxAll) => {
      checkboxAll.addEventListener("change", function () {
        const groupId = checkboxAll.id.split("-")[0]; // Obtener el grupo (price, color, brand)
        const groupCheckboxes = document.querySelectorAll(
          `input[data-filter='${groupId}']`
        );
  
        groupCheckboxes.forEach((checkbox) => {
          checkbox.checked = checkboxAll.checked; // Seleccionar o deseleccionar todos
        });
  
        filterProducts(); // Llama a la función para actualizar el filtro
      });
    });
  
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const productCards = document.querySelectorAll(".product-card");
  
    // Escucha los cambios en los checkboxes
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", filterProducts);
    });
  
    // Filtra los productos según los valores seleccionados
    function filterProducts() {
      const selectedPrices = getSelectedValues("price");
      const selectedColors = getSelectedValues("color");
      const selectedBrands = getSelectedValues("brand");
  
      productCards.forEach((card) => {
        const productPrice = parseInt(card.getAttribute("data-price"));
        const productColor = card.getAttribute("data-color");
        const productBrand = card.getAttribute("data-brand").toLowerCase();
  
        const matchesPrice =
          selectedPrices.length === 0 ||
          selectedPrices.some(([min, max]) => productPrice >= min && productPrice <= max);
  
        const matchesColor =
          selectedColors.length === 0 || selectedColors.includes(productColor);
  
        const matchesBrand =
          selectedBrands.length === 0 || selectedBrands.includes(productBrand);
  
        card.style.display = matchesPrice && matchesColor && matchesBrand ? "block" : "none";
      });
    }
  
    // Obtiene los valores seleccionados de los checkboxes
    function getSelectedValues(type) {
      const selectedCheckboxes = Array.from(
        document.querySelectorAll(`input[data-filter='${type}']:checked`)
      );
  
      if (type === "price") {
        return selectedCheckboxes.map((checkbox) => {
          const [min, max] = checkbox.value.split("-").map(Number);
          return [min, max];
        });
      } else {
        return selectedCheckboxes.map((checkbox) => checkbox.value.toLowerCase());
      }
    }
  
    const resetButton = document.getElementById("reset-filters");
  
    // Resetea todos los checkboxes cuando se hace clic en el botón
    resetButton.addEventListener("click", () => {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false; // Desmarcar todos los checkboxes
      });
      filterProducts(); // Actualizar la vista de productos
    });
  });
  