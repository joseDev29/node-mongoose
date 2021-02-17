function saveCallback(Model, data) {
  const document = new Model(data);

  document.save((err, documentSaved) => {
    err
      ? console.error(`--- Mongoose Error: ${err}`)
      : console.log(`--- Document saved: ${documentSaved}`);
  });
}

function savePromise(Model, data) {
  const document = new Model(data);

  document
    .save()
    .then((documentSaved) => {
      console.log(`--- Document save: ${documentSaved}`);
    })
    .catch((err) => {
      console.error(`--- Mongoose Error: ${err}`);
    });
}

async function saveAsyncAwait(Model, data) {
  const document = new Model(data);

  const documentSaved = await document.save();

  console.log(`--- Document save: ${documentSaved}`);
}

module.exports = {
  saveCallback,
  savePromise,
  saveAsyncAwait,
};
