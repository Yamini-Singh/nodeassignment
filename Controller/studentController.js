var Student=require('../Model/student');
var User=require('../Model/user');
var University= require('../Model/university');

exports.postUser = function(req, res){
    // creating the new user
    var usr = new User({
        userId: req.body.userId,
        name: req.body.name,
        fatherName: req.body.fatherName,
        emailId: req.body.emailId,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
      created_at: Date.now(),
      
    });
  
    //save the created user
    usr.save(function(error,response){
      // handle the error
        if(error){
          return error;
        }
        else{
          //send the response to the browser
          res.json({
            success: true,
            body: response
          });
        }
    }); // end of save method
} // end of postUser method

exports.getAllUsers = function(req,res){
    User.find({},function(error,response){
        if(error){
            return res.json(req,res,error);
        }
        //sending the reponse to the browser
        res.json(response);

    });
}


exports.postStudent = function(req, res){
    // creating the new student
    var std = new Student({                
        studentId: req.body.studentId,
        name: req.body.name,
        stream: req.body.stream,
        year: req.body.year,
        semester: req.body.semester,
        univName: req.body.univName,
        created_at: Date.now(),
                      
    });
    //save the created user
    std.save(function(error,response){
      // handle the error
        if(error){
          return error;
        }
        else{
          //send the response to the browser
          res.json({
            success: true,
            body: response
          });
        }

    });
}

exports.getAllStudents = function(req,res){
    Student.find({},function(error,response){
        if(error){
            return res.json(req,res,error);
        }
        //sending the reponse to the browser
        res.json(response);

    });
}

exports.postUniversity = function(req, res){
        // creating the new university 
        var univ = new University({
            univId: req.body.univId,
            univName: req.body.univName,
            city: req.body.city,
            state: req.body.state,
            created_at: Date.now(),
          
        });
      
        //save the created university
        univ.save(function(error,response){
          // handle the error
            if(error){
              return error;
            }
            else{
              //send the response to the browser
              res.json({
                success: true,
                body: response
              });
            }
        }); 
}

exports.getAllUniversities = function(req,res){
        University.find({},function(error,response){
            if(error){
                return res.json(req,res,error);
            }
            //sending the reponse to the browser
            res.json(response);
    
        });
}

exports.getStudentInStream  = function(req,res){
        var stream=req.params.stream;
        var query = Student.find({stream:stream}).select({ "name": 1, "_id": 0});

        query.exec(function (err, response) {
            if (err) return res.send(err);
            res.json(response);
        });
}

exports.getStudentInUniversity  = function(req,res){
    var unireg=req.params.reg;
    regexp = new RegExp(unireg);
    var query = Student.find({univName:regexp}).select({ "name": 1, "_id": 0});

    query.exec(function (err, response) {
        if (err) return res.send(err);
        res.json(response);
    });
}
 
exports.getStudentDetails = function (req, res) {
    var username = req.params.name;
    User.findOne({name: username}).exec()
      .then(function(user){
        var result = [];
        return Student.findOne({ studentId: user.userId}).exec()
          .then(function(student){
              return [user,student];
          });
      })
      .then(function(result){
        var student = result[1];
        return University.find({univName: student.univName}).exec()
          .then(function(university) {
            result.push(university);
            return result;
          })
      })
      .then(function(result){
        var user = result[0];
        var student = result[1];
        var university = result[2][0];
        var body={userId: user.userId,
            name: user.name,
            fatherName: user.fatherName,
            emailId: user.emailId,
            phoneNumber: user.phoneNumber,
            address: user.address,
            studentId: student.studentId,
            stream: student.stream,
            year: student.year,
            semester: student.semester,
            univName: student.univName,
            univId: university.univId,
            univCity: university.city,
            univState: university.state
            }
        res.json(body);
      })
      .then(undefined, function(err){
          res.send(err);
        //Handle error
      })
  }