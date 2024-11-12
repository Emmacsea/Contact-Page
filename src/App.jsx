import { useState } from 'react'
import { Contact } from "./Components/Contact";

function App() {
const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [email, setEmail] = useState('');
const [emailaddress, setEmailAddress] = useState('');
const [phoneno, setPhoneno] = useState('');
const [message, setMessage] = useState('');
const [subject, setSubject] = useState(null);


const handleFirstName = (e) => {
  setFirstname(e.target.value);
};

const handleLastName = (e) => {
  setLastname(e.target.value)  ;
};

const handleEmail = (e) => {
  setEmail(e.target.value);
};

const handleEmailAddress = (e) => {
  setEmailAddress(e.target.value);
};

const handlePhoneNo = (e) => {
  setPhoneno(e.target.value);
};

const handleMessage = (e) => {
  setMessage(e.target.value);
}

const handleSubject = (e) => {
  setSubject(e.target.value);
}

const confirmEmail = () => {
  window.alert(`Your Email has been submitted successfully, await our contact`);
}
  

  return (
    <>
      <Contact
        firstname={firstname}
        lastname={lastname}
        email={email}
        emailaddress={emailaddress}
        phonenumber={phoneno}
        selectsub={subject}
        message={message}
        onChangeFirstName={handleFirstName}
        onChangeLastName={handleLastName}
        onChangeEmail={handleEmail}
        onChangeEmailAddress={handleEmailAddress}
        onChangePhoneNumber={handlePhoneNo}
        onChangeMessage = {handleMessage}
        onChangeSelectSub={handleSubject}
        onSubmitEmail={confirmEmail}
      />
    </>
  )
}

export default App
