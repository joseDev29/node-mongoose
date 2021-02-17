async function find(Model, query) {
  const documents = await Model.find(query);
  console.log("--- Find Documents : ", documents);
}

async function findOne(Model, query) {
  const document = await Model.findOne(query);
  console.log("--- Find One Document", document);
}

module.exports = {
  find,
  findOne,
};
