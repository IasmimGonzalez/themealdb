function ForkedFrom({ source }) {
  return (
    <footer className='forked-from'>
      {/* <p className='my-2'>Forked from:</p> */}
      <a href={source} target='_blank' rel='noopener noreferrer'>
        <h4 className='my-3'>Get the original recipe here! </h4>
      </a>
    </footer>
  )
}

export default ForkedFrom
