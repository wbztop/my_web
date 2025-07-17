const Section = ({ initialContent, children }) => {
  return (
    <section className='text-center'>
      <div className='min-h-screen flex flex-col justify-center items-center p-8'>
        {initialContent}
      </div>
      <div className='min-h-screen flex flex-col justify-center items-center p-8'>{children}</div>
    </section>
  )
}

export default Section
