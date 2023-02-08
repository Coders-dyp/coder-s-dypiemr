import React from 'react'
import Card from "./Card"
import contacts from "./contacts"
function Team() {

  function createCard(contact) {
    return <Card
      id={contact.id}
      key={contact.id}
      image={contact.image}
      name={contact.name}
      post={contact.post}
    />
  }


  return (
    <div>
      <div className='lead-heading'>Head of Coder's Club</div>

      <div className='lead'>

        <Card
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          name="Prateek sir"
          post="Head"
        />

      </div>

      <div className='main-heading'>Team Member</div>

      <div className="main-class">

        {contacts.map(createCard)}
      </div>

    </div>



  )
}

export default Team