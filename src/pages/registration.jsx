import { useForm } from "react-hook-form";
import { AuthContext } from "../auth/authcontext";
import { useContext } from "react";
export function Registration()
{
    const {register,handleSubmit} =useForm();
    const {registration}=useContext(AuthContext);
    const submitForm=async (data)=>
    {
      //console.log(data);
      await registration(data);
    };

    return(<>
    <h1> New User Registration </h1>
    <form onSubmit={handleSubmit(submitForm)}>
        <div>
        <label>first Name</label>
        <div>
            <input type="text" {...register("firstName")} />
        </div>
        </div>

        <div>
        <label>Last Name</label>
        <div>
            <input type="text" {...register('lastName')} />
        </div>
        </div>

       <div>
        <label>Address </label>
        <div>
            <textarea {...register('address')}></textarea>
        </div>
        </div>

        <div>
        <label>Email ID</label>
        <div>
            <input type="email" {...register('emailID')} />
        </div>
        </div>

       <div>
        <label>Mobile No</label>
        <div>
            <input type="text" {...register('mobileNo')} />
        </div>
        </div>

        <div>
        <label>Password</label>
        <div>
            <input type="Password" {...register('password')} />
        </div>
        </div>
         <div>
            <button>Submit</button>
         </div>
    </form>
    </>);
}