import React,{useState} from "react";
import TextField from "./textfield";

function FormBox(){
    const [name,setName]=useState("");
    const [roll,setRoll]=useState("");
    const [branch,setBranch]=useState("");
    const [gmail,setGmail]=useState("");
    const [password,setPassword]=useState("");
    const [conPass,setConPass]=useState("");

    let handleName=(e)=>{
            setName(e); 
            setError(prevstate=>({
                ...prevstate,
                name:true
            }));
    }
    let handleRoll=(e)=>{
        setRoll(e);
        setError(prevstate=>({
            ...prevstate,
            roll:true
        }));
    }
    let handleBranch=(e)=>{
        setBranch(e);
        setError(prevstate=>({
            ...prevstate,
            branch:true
        }));
    }
    let handleGmail=(e)=>{
        setGmail(e);
        setError(prevstate=>({
            ...prevstate,
            gmail:true
        }));
    }
    let handlePassword=(e)=>{
        setPassword(e);
        setError(prevstate=>({
            ...prevstate,
            password:true
        }));
    }
    let handleConPass=(e)=>{
        setConPass(e);
        setError(prevstate=>({
            ...prevstate,
            conpass:true
        }));
    }
    let errorMsg={
        name:"name field must contain a single letter",
        roll:"please enter roll number ",
        branch:"please enter branch",
        gmail:"Enter valid gmail address",
        password:"password must have atleast 8 letters",
        conpass:"password not matched"
    }
    const [error,setError]=useState({
        name:true,
        roll:true,
        branch:true,
        gmail:true,
        password:true,
        conpass:true
    })
    let Validate=()=>{
            var check=false;
            if(name===""){
                check=true;
                setError(prevstate=>({
                    ...prevstate,
                    name:false
                }));
            }
            else{
                setError(prevstate=>({
                    ...prevstate,
                    name:true
                }));
            }
            if(roll===""){
                check=true;
                setError(prevstate=>({
                    ...prevstate,
                    roll:false
                }));
            }
            else{
                setError(prevstate=>({
                    ...prevstate,
                    roll:true
                }));
            }
                if(branch===""){
                    check=true;
                    setError(prevstate=>({
                        ...prevstate,
                        branch:false
                    }));
                }
                else{
                    setError(prevstate=>({
                        ...prevstate,
                        branch:true
                    }));
                }
            if(gmail.includes("@")){
                setError(prevstate=>({
                    ...prevstate,
                    gmail:true
                }));
            }
            else{
                check=true;
                setError(prevstate=>({
                    ...prevstate,
                    gmail:false
                }));
            }
            if(password.length<8){
                check=true;
                setError(prevstate=>({
                    ...prevstate,
                    password:false
                }));
            }
            else{
                setError(prevstate=>({
                    ...prevstate,
                    password:true
                }));
            }
            if(password !==conPass ){
                check=true;
                setError(prevstate=>({
                    ...prevstate,
                    conpass:false
                }));
            }
            else{
                setError(prevstate=>({
                    ...prevstate,
                    conpass:true
                }));
            }
            if(!check){
                alert("Form Successfully submitted");
            }

     
    }
    return <div className=" flex flex-col">
    <p className="mx-auto text-3xl  mb-4 text-slate-800">Sign Up</p>
    <TextField  innerText="Enter Your Name" encrypt="text" call={handleName} message={errorMsg.name} set={error.name} />
    <TextField innerText="Roll Number" encrypt="text" call={handleRoll} message={errorMsg.roll} set={error.roll} />
    <TextField innerText="Branch"  encrypt="text" call={handleBranch} message={errorMsg.branch} set={error.branch} />
    <TextField innerText="Institution G-mail"  encrypt="text" call={handleGmail} message={errorMsg.gmail} set={error.gmail} />
    <TextField innerText="Password"  encrypt="text" call={handlePassword} message={errorMsg.password} set={error.password} />
    <TextField innerText="Confirm Password" encrypt="password" call={handleConPass} message={errorMsg.conpass} set={error.conpass} />
    <button className="h-10 w-80 rounded-full mt-5 bg-slate-700 text-white hover:bg-slate-600" onClick={Validate} > Submit</button>
    
    </div>
}

export default FormBox;