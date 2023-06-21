import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-neutral-0 border-t border-neutral-200">
      <Container>
        <div className="py-5 flex flex-col justify-center lg:flex-row items-center">
          <img src='/assets/blog/logo/ametokidokicoffee.png' className="w-16 h-16 rounded-full" />
        </div>
      </Container>
    </footer>
  )
}

export default Footer
