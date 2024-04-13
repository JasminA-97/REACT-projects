import myStyle from '../myStyle.module.css'
function Employee({name,status,desig,check}){
    console.log(name,status,desig,check);
    const handledetails=(myname)=>{
        alert(myname);
    }
    return(
        <>
        <p className={myStyle.group2}>----child of app----</p>
        <h2>Employee Details(child of app)</h2>
        <ul>               
        {/*Conditional Rendering :For 'if' condition Use truthy operator &&. check if it is working by making empty string inside the place where data passing, in child selector of parent 'app'   <Employee name={''} /> */}
            {   name &&                     
                <p>employee name:{name}</p>
            }
            <p>employee status: {status?'yes':'no'}</p>
            <p>fhghfg: {desig?'yes':'no'}</p>
        </ul>
        <div className='text-center pb-3'><button onClick={()=>handledetails(name)} className="btn btn-success">Btn inside Employee</button></div>
        {/* while fn calling use arrow fn; otherwise alert automatically shows with out button click */}
        </>
    )
}
export default Employee