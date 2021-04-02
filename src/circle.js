const circle = (radius) => {
  const PI = 3.14;

  if (!radius) { return undefined; }
  return {
    radius,
    area: parseFloat((PI * radius * radius).toPrecision(4)),
    circumference: parseFloat((2 * PI * radius).toPrecision(4)),
  };
};

module.exports = circle;
