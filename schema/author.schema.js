const { Schema, model } = require("mongoose");

const AuthorSchema = new Schema({
  full_name: {
    type: String,
    required: [true, "Full_name bo'lishi shart"],
    set: value => value.trim(""),
    match: [/^[a-zA-Z\s]+$/],
    minlength: 3,
    maxlength: 50,

  },
  birth_date: {
    type: Date,
    required: true,
    min: [1, "Kamida 1-yil bo'lishi kerak"],
    max: Date.now
  },
  death_date: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
    trim: true
  },
  creativity: { // "createivity"da xato bor edi
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  period: { // "pariod" o‘rniga "period"
    type: String,
    required: true,
    enum: {
      values: ["Temuriylar davri", "Jadid adabiyoti", "Sovet davri", "Mustaqillik davri"],
      message: "{VALUE} bunaqa qiymat qabul qilinmaydi"
    },
  },
  //   phone_number: { // "pariod" o‘rniga "period"
  //   type: String,
  //   validate: {
  //     validator: function(value) {
  //       return /^\+998\d{9}$/.test(value);
  //     },
  //     message: "+998XX XXX XX XX shunaqa formatda bo'lsin"
  //   },
  //   required: true,
  // },
},
{
    versionKey: false,
    timeseries: true
}
)
AuthorSchema.statics.findByName = function(value) {
  return this.find({full_name: value})
}



module.exports = model("Author", AuthorSchema);
