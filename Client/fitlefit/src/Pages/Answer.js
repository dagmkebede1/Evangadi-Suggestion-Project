import React from 'react'

function Answer() {
  return (
    <div>
        <form action="" method='POST'>
                <label htmlFor="inputOne">Name</label>
                <input id='inputOne' type="text" />
                <textarea name="" id="" cols="30" rows="10" placeholder='Answer using description'></textarea>
                <textarea name="" id="" cols="30" rows="10" placeholder='your code here'></textarea>
                <button>Submit</button>
        </form>
    </div>
  )
}

export default Answer