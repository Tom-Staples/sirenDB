const filterItems = (models, fabrics, queryParams) => {
  const model = models.filter(
    element => element.description === queryParams.size
  );
  const fabric = fabrics.filter(
    element => element.name === queryParams.fabricName
  );

  return [model[0], fabric[0]];
};

export default filterItems;
