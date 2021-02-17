async function updateOne(Model, query, data) {
  const documentUpdated = await Model.updateOne(query, data);

  console.log("--- Document Updated: ", documentUpdated);
}

module.exports = {
  updateOne,
};
