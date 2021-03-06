const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/OtherPopularGames', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('openUri', function () {
  console.log('mongoose connected successfully');
});

const otherPopularGamesSchema = new mongoose.Schema({
  product_id: Number,
  genreName: String
});

let findGamesInSameGenre = (id) => {

  return OtherPopularGames.findOne({ product_id: id }, 'genreName')
    .then((genre) => {
      return OtherPopularGames.find({ genreName: genre.genreName });
    })
    .then((data) => {
      return data;
    })
    .catch(error => console.log('ERROR', error));

};

const OtherPopularGames = mongoose.model('OtherPopularGames', otherPopularGamesSchema);

//module.exports.OtherPopularGames = OtherPopularGames.OtherPopularGames;
module.exports = {
  OtherPopularGames,
  findGamesInSameGenre
}


