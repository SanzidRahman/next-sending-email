'use client'
import { sendEmail } from "../../action/sending-email"



export default  function Home() {
  return (
    <div className="z-40 mt-[10rem] h-[23rem] w-[40rem] bg-slate-600 sm:translate-x-1/3 rounded-xl">
      <form className="flex flex-col "
      action={async (formData) => {
        await sendEmail(formData)
        console.log(sendEmail)
       
      }}
      >
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
          maxLength={500}
          className="h-12 w-3/4 ml-[4rem] mt-12 p-2 pl-4 rounded-2xl border border-black"
         />
        <textarea 
        name="message"
        placeholder="Enter Your Message here"
        required
        maxLength={5000}
          className="h-[10rem] w-3/4 ml-[4rem] mt-2 p-3 pl-4 rounded-xl border border-black"
        />
        <button className="h-[3rem] w-3/4 ml-[4rem] mt-2 p-3 pl-4 rounded-xl border border-black bg-white hover:bg-blue-400 transition-all" type="submit">Submit </button>
      </form>
    </div>
  )
}
