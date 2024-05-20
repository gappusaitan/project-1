import "./index.css";

const Login = () => {

    const onSubmitusedetails = (event) =>{
        event.preventdefault();
        
        // eslint-disable-next-line no-unused-vars
        let url = "https://apis.ccbp.in/login";
        

    }
  return (
    <>
    <div className="my-cont">
      <form id="first" onSubmit={onSubmitusedetails} className="w-25  p-4 rounded-4 ">
        <div className="m-2">
        <h1 className="top">Jobby</h1>
          <label htmlFor="exampleInputEmail1" className="form-label">
          <h1 className="sec">  Email address</h1>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">

           <h1 className="sec"> Password</h1>
          </label>
        </div>

          <div>      
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
       <div className="m-4">
        
        <button type="submit" className="btn btn-info w-100 ">
          Submit
        </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Login;
