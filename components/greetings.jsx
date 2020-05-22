import React, { useState } from 'react'

export default () => {
  const [slug, setSlug] = useState('')

  const updateSlug = (event) => {
    setSlug(event.target.value)
  }
  return (
    <div>
      <div className="heading">What is your name?</div>
      <input type="text" name="search" onChange={(event) => { setSlug(event.target.value) }} value={slug} />
      <div className="slug">{slug}? What an ugly name.</div>
    </div>
  )
}
