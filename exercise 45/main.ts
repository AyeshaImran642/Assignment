type car = {
  manufacturer: string;
  model: string;
  [key: string]: any;
};

function storeCar(
  manufacturer: string,
  model: string,
  optional: Record<string, any>
): car {
  return {
    manufacturer,
    model,
    ...optional,
  };
}

const myCar = storeCar("Toyota", "Camry", { color: "Black", year: "2024" });

console.log(myCar);
