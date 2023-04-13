function divide(a = 1, b = 1) {
  if (!a || !b || !parseInt(a) || !parseInt(b))
    throw new Error("Informe dois números válidos e diferentes de zero.");

  if (a >= b) {
    console.log((a / b).toFixed(2));
  } else {
    console.log("Nesta conta o dividendo não pode ser menor que o divisor");
  }
}

divide(12, 13);
