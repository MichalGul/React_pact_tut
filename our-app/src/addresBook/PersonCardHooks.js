import React, {useState, useEffect} from 'react'


const PersonCard = () => {
  //Basic use state hook
  const [initials, setInitials] = useState("LK")
  const [name, setName] = useState("Card with React Hook")
  const [phone, setPhone] = useState("55532423")
  const [email, setEmail] = useState("email@emaik.op")
  const [favorite, setFavorite] = useState(false)

  //called every time that entire component is rendered(or rerendered)
  useEffect(() => {
    console.log(`Value has change to ${favorite} `)
    //save to local storage, API calls, DOM interactions etc.
  })



  const activeClass = favorite ? 'active' : ''

  return (
    <section className="card-container">
      <header className="card-header">
        <span initials={initials}></span>
        <h2>{name}</h2>
        <div
          className={`favorite ${activeClass}`}
          onClick={() => { setFavorite(!favorite) }}
        >
          ☆
        </div>
      </header>

      <main>
        <ul>
          <li>
            <span>Phone</span>
            {phone ? phone : 'n/a'}
          </li>
          <li>
            <span>Email</span>
            {email ? email : 'n/a'}
          </li>
        </ul>
      </main>
    </section>
  )
}

export default PersonCard