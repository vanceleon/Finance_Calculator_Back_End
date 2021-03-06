const mongoose = require('mongoose');

const HistoricalPriceSchema = new mongoose.Schema({

})

// Template

// const BootcampSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Please add a name'],
//     unique: true,
//     trim: true,
//     maxlength: [50, 'Name can not be more than 50 characters']
//   },
//   slug: String,
//   description: {
//     type: String,
//     required: [true, 'Please add a description'],
//     maxlength: [500, 'Description can not be more than 500 characters']
//   },
//   website: {
//     type: String,
//     match: [
//       /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
//       'Please use a valid URL with HTTP or HTTPS'
//     ]
//   },
//   phone: {
//     type: String,
//     match: [
//       /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
//       'Please add valid email'
//     ]
//   },
//   address: {
//     type: String,
//     required: [true, 'Please add an address']
//   },
//   location: {
//     // GeoJSON Point
//     type: {
//       type: String,
//       enum: ['Point'],
//     },
//     coordinates: {
//       type: [Number],
//       index: '2dsphere'
//     },
//     formattedAddress: String,
//     street: String,
//     city: String,
//     state: String,
//     zipcode: String,
//     country: String
//   },
//   careers: {
//     // Array of Strings
//     type: [String],
//     required: true,
//     enum: [
//       'Web Development',
//       'Mobile Development',
//       'UI/UX',
//       'Data Science',
//       'Business',
//       'Other'
//     ]
//   },
//   averageRating: {
//     type: Number,
//     min: [1, 'Rating must be at least 1'],
//     max: [10, 'Rating must not be more than 10'],
//   },
//   averageCost: Number,
//   photo: {
//     type: String,
//     default: 'no-photo.jpg'
//   },
//   housing: {
//     type: Boolean,
//     default: false
//   },
//   jobAssistance: {
//     type: Boolean,
//     default: false
//   },
//   jobGuarantee: {
//     type: Boolean,
//     default: false
//   },
//   acceptGi: {
//     type: Boolean,
//     default: false
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
// });

module.exports = mongoose.model('Historical Prices', HistoricalPriceSchema);