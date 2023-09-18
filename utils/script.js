let cookies = () => {
  const COOKIE_CONSENT_EXPIRY_DAYS = 365 // 1 year

  const addScript = (source) => {
    // agrega el script al header
    const script = document.createElement('script')
    script.src = source
    script.async = true
    document.head.appendChild(script)
  }

  const trackingScripts = {
    performance: () => {},
    advertisement: () => {},
    functional: () => {},
    analytics: () => {
      addScript('https://www.google-analytics.com/analytics.js')
    },
    others: () => {},
  }

  //-----------------------------------------------------
  // Variables
  //-----------------------------------------------------
  const cookieInitial = document.querySelector('#cookies-globalsat-text')
  const cookieAccept = document.querySelector('#cookies-accept-all')
  const cookieOpenSettings = document.querySelector('#cookies-settings')
  const cookieSettings = document.querySelector('#cookies-box')
  const cookieReject = document.querySelector('#cookies-reject')
  const cookieSubmit = document.querySelector('#cookies-setting-submit')
  const cookiesCheckboxes = document.querySelectorAll('.cookies-checkbox')
  const cookiesBackSettings = document.querySelector('#cookies-back-section')

  //-----------------------------------------------------
  // Functions
  //-----------------------------------------------------
  const setElementDisplay = (element, s) => {
    if (element) element.style.display = s
  }

  const hideInitialCookie = () => {
    setElementDisplay(cookieInitial, 'none')
  }

  const showInitialCookie = () => {
    setElementDisplay(cookieInitial, 'block')
  }

  // caso 2: el usuario quiere setear sus cookies
  const showSettings = () => {
    setElementDisplay(cookieSettings, 'block')
  }

  // caso 5: el usuario clickea en cerrar el cartel de settings
  const hideSettings = () => {
    setElementDisplay(cookieSettings, 'none')
  }

  // caso 1: el usuario clickea en aceptar todas las cookies
  const acceptAllCookies = () => {
    hideInitialCookie()
    localStorage.setItem('cookie', JSON.stringify(Object.keys(trackingScripts)))
    localStorage.setItem('cookieDate', new Date().toISOString())

    Object.values(trackingScripts).forEach((callback) => {
      callback()
    })
  }

  // caso 4: el usuario clickea en aceptar solo algunas cookies
  const acceptCookies = () => {
    let acceptedScripts = {}
    cookiesCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const scriptName = checkbox.getAttribute('data-script')
        if (trackingScripts.hasOwnProperty(scriptName)) {
          acceptedScripts[scriptName] = trackingScripts[scriptName]
        }
      }
    })
    localStorage.setItem('cookie', JSON.stringify(Object.keys(acceptedScripts)))
    localStorage.setItem('cookieDate', new Date().toISOString())

    Object.values(acceptedScripts).forEach((callback) => {
      callback()
    })

    hideSettings()
    hideInitialCookie()
  }

  // caso 3: el usuario clickea en rechazar cookies
  const rejectCookies = () => {
    hideSettings()
    hideInitialCookie()
    localStorage.setItem('cookie', JSON.stringify({}))
    localStorage.setItem('cookieDate', new Date().toISOString())
  }

  //-----------------------------------------------------
  // Initialization
  //-----------------------------------------------------
  if (localStorage.getItem('cookie') !== null) {
    JSON.parse(localStorage.getItem('cookie')).forEach((scriptName) => {
      if (trackingScripts.hasOwnProperty(scriptName)) {
        trackingScripts[scriptName]()
      }
    })
  } else {
    showInitialCookie()
  }

  //-----------------------------------------------------
  // Events
  //-----------------------------------------------------

  // caso 1: el usuario clickea en aceptar todas las cookies
  cookieAccept.addEventListener('click', acceptAllCookies)
  // caso 2: el usuario quiere setear sus cookies
  cookieOpenSettings.addEventListener('click', showSettings)
  // caso 3: el usuario clickea en rechazar cookies
  cookieReject.addEventListener('click', rejectCookies)
  // caso 4: el usuario clickea en aceptar solo algunas cookies
  cookieSubmit.addEventListener('click', acceptCookies)
  // caso 5: el usuario clickea en cerrar el cartel de settings
  cookiesBackSettings.addEventListener('click', (e) => {
    e.preventDefault()
    hideSettings()
    showInitialCookie()
  })
}

document.addEventListener('DOMContentLoaded', function () {
  cookies()
})
