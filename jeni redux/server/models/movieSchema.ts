import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    Title:{
      type:String
    },
    Year:{
      type:String
    },
    imdbID:{
      type:String
    },
    Type:{
      type:String
    },
    Poster:{
      type:String
    },
    Actors:{
      type:String
    },
    Director:{
      type:String
    },
    Plot:{
      type:String
    },
    imdbRating:{
      type:String
    },    
    BoxOffice:{
      type:String
    },
    bookmarkedUser:{
      type:Array
    }
  },
  { collection: "movies", timestamps: true }
);

export = mongoose.model("movie", movieSchema);
