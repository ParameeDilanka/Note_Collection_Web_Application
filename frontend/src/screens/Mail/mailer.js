import emailjs from "emailjs-com";
import { Link } from 'react-router-dom';

const Mailer = () =>{
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm("service_dz0zzkn",
         'template_d1dqy2c',
          e.target,
          "user_TA9OxKSZELrcfge2g58c5"
          ).then(res=>{
            alert("E-mail send successfully")
             }).catch(err=>
                alert("Failed to send email") );
         }

    return(
        <div>
        <Link to={"/register"}>User List</Link><br></br>

        <div className="container border"
        style={{marginTop:"50px",
        width:"50%",
        backgroundImage:`url('https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=664&ext=jpg')`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        }}>
    <center><h3 style={{marginTop:"25px"}}>Contact Form</h3></center>
    <form className="row" style={{margin:"25px 85px 75px 100px"}}   onSubmit={sendEmail} autoComplete="on">

        <lable>Name:</lable>
        <input type="text" name="name"  required/><br></br><br></br>

        <lable>Email:</lable>
        <input type="email" name="email" className="form-control"   required pattern = "[a-zA-Z0-9.%_+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}"/><br></br><br></br>

        <lable>Login Link:</lable>
        <input type="link" name="link" className="form-control"  required/><br></br><br></br>

        <lable>Temporary Password</lable>
        <input type="password" name="password" className="form-control" required/><br></br><br></br>

        <input type ='submit' name='Send' className="form-control btn btn-primary" style = {{marginTop:"30px"}}  />
            </form>
        </div>
        </div>
    );

};
export default Mailer;