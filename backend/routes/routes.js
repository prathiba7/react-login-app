
const express = require('express')
const router = express.Router()
const registerTemplatecopy=require('../modules/registermodule')
const loginTemplatecopy=require('../modules/loginmodule')



router.post('/reg',(req,response)=>{
    const username=req.body.username;
    const email=req.body.email;
    const password=req.body.password;
     
    let errors=[];
  //rquired fields
  if(!username || !email || !password ){
      errors.push({msg:'please fill in all fields'});
  }
  //passwordlength
  if(password.length<6){
      errors.push({msg:'password should atleast 6 characters'});
  }

  if(errors.length>0){
      res.render('register',{
          errors,username,email,password
      });

  }
  else{
    
      //validation passed
      
        User.findOne({email : email})
        .then(user=>{
            if(user){
           //user exits
           errors.push({msg:'Email is already registered'});
           response.render('register',{
            errors,username,email,password
        });
    }else{

        const newUser=new loginTemplatecopy({
            username,email,password
        });
        //hash password
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => {
                  req.flash(
                    'success_msg',
                    'You are now registered and can log in'
                  );
                  response.redirect('/users/login');
                })
                .catch(err => console.log(err));
            });
          });
        }
      });
    }
  });
  
  /* const registeredUser= new registerTemplatecopy({
     
        username:req.body.username,
        email:req.body.email,
        password:req.body.password

   })
   registeredUser.save()
   .then(data =>{
       response.json(data)
   })
   .catch(error =>{
       response.json(error)
     
       
   })*/


 router.post('/login',(req,res,next)=>{
    passport.authenticate('local',{
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true  
    })(req,res,next);
});
//login failure
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
  });

  
module.exports = router