const info = document.getElementById('info')
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is ready!')
  const heading = document.createElement('h2')
  heading.textContent = 'This was added when DOM was ready!'
  document.body.appendChild(heading)
  console.log('Heading added now.')
})
window.addEventListener('load', () => {
  console.log('All resources (images, CSS, scripts) are fully loaded!')
  console.log('Page is fully loaded')
})

// Window resize event
window.addEventListener('resize', () => {
  info.textContent = `Window resized: ${window.innerWidth} x ${window.innerHeight}`
  console.log("window resize ")
})

// Window scroll event
window.addEventListener('scroll', () => {
    info.textContent = `Scrolled to Y: ${window.scrollY}`
})