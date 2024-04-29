import React from 'react'

const SignIn = () => {
  return (
    <div>
      <div className="flex flex-col border-2 border-black h-[600px] w-11/12">
        <div className="border-4 border-blue-500 h-40 w-5/6 mx-auto my-4 "></div>
          <div className="border-4 border-red-500 flex-1">
              <div className="w-5/6 h-64 mx-auto flex flex-col justify-around">
                  <label className="flex flex-col"> 
                      <p className="ml-1">Email</p>
                      <input type="text" className="border border-black h-10 min-w-5/6" />
                  </label>
                  <label className="flex flex-col"> 
                      <p className="ml-1">Password</p>
                      <input type="text" className="border border-black h-10 min-w-5/6" />
                  </label>
              </div>
          </div>
      </div>
    </div>
  )
}

export default SignIn;
