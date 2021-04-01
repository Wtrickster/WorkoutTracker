const path = require("path");

// Get Data To Display
module.exports = function(app){ 
  app.get("/exercise",function (req,res){   
      res.sendFile(path.join(__dirname,"../public/exercise.html"));
  });

  app.get("/",function(req,res){    
      res.sendFile(path.join(__dirname,"../public/index.html"));
  });

  app.get("/stats",function(req,res){   
      res.sendFile(path.join(__dirname,"../public/stats.html"));
  });
};