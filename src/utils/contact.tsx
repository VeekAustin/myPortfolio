export default function Contact() {
  return (
    <section id='contact' className='py-20 px-4 bg-white'>
      <div className='max-w-2xl mx-auto text-center'>
        <h2 className='text-4xl font-bold text-gray-900 mb-4'>Get In Touch</h2>
        <p className='text-gray-600 mb-8'>
          I am currently open to new opportunities. Feel free to reach out!
        </p>
        <a href='iniekevictor@gmail.com'
           className='inline-block bg-blue-600 text-white px-10 py-4
                      rounded-full text-lg font-semibold hover:bg-blue-700
                      transition-colors'>
          Say Hello
        </a>
        <div className='flex justify-center gap-8 mt-10'>
          <a href='https://github.com/VeekAustin'
             className='text-gray-500 hover:text-gray-900 transition-colors'>
            GitHub
          </a>
          <a href='https://linkedin.com/in/victoraugustine'
             className='text-gray-500 hover:text-gray-900 transition-colors'>
            LinkedIn
          </a>
          <a href='https://x.com/Austin486295292'
             className='text-gray-500 hover:text-gray-900 transition-colors'>
            Twitter/x
          </a>
        </div>
      </div>
    </section>
  );
}
