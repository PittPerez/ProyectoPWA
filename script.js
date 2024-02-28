if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de service worker exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el service worker', err))
  }