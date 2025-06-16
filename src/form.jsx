import React, { useRef } from 'react'
import style from './form.module.css'
import Button from './button'

export default function Form({ callBack }) {
  const nameRef = useRef();
  const titleRef = useRef();
  const addressRef = useRef();
  const emailRef = useRef();
  const phnRef = useRef();
  const linksRef = useRef();
  const selectRef = useRef();

  const isValideEmail = ()=>{
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(emailRef.current.value);
  }

  const isValidePhn = ()=>{
    const pattern = /^(\+91[\s-]?)?[0]?[6-9]\d{9}$/;
    return pattern.test(phnRef.current.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(isValideEmail() && isValidePhn()){
      
      const cardData = {
      name: nameRef.current.value,
      title: titleRef.current.value,
      address: addressRef.current.value,
      email: emailRef.current.value,
      phone: phnRef.current.value,
      links: linksRef.current.value,
      template: selectRef.current.value
      }
      // console.log("cardData")
      localStorage.setItem("cardStore", JSON.stringify(cardData))
      callBack(cardData)
      alert("Submitted")
    }
    else if(!isValideEmail()){
      alert("Not a valid Email");
    }
    else if(!isValidePhn()){
      alert("Not a valid Phn No.");
    }
  }

  const handleReset = ()=>{
    nameRef.current.value = "Name";
    titleRef.current.value = "Job Title";
    addressRef.current.value = "Address";
    emailRef.current.value = "Email";
    phnRef.current.value = "Phone No.";
    linksRef.current.value = "Links";
    selectRef.current.value = "1";
  }
  
  return (
    <>
        <form>
            <label>Name</label>
            <input placeholder=' Enter Your name' ref={nameRef}/>

            <label>Title</label>
            <input placeholder=' Enter Your Title' ref={titleRef}/>

            <label>Address</label>
            <input placeholder=' Enter Your Address' ref={addressRef}/>

            <label>Email</label>
            <input placeholder=' Enter Your Email' ref={emailRef}/>

            <label>Phone Number</label>
            <input placeholder=' Enter Your Ph.no' ref={phnRef}/>

            <label>Links</label>
            <input placeholder=' Add Links' ref={linksRef}/>

            <div>
                <label className={style.selectlabel}>Select template</label>
                <select ref={selectRef}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                </select>
            </div>

            <div className={style.btns}>
                <Button onClick={handleSubmit}>Submit</Button>
                <Button onClick={handleReset}>Reset</Button>
            </div>

        </form>
    </>
  )
}
