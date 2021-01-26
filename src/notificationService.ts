import miniToastr from 'mini-toastr'

const notificationService = {
  defaultMessage: {
    type: 'success',
    title: 'Success',
    message: 'Success',
    timeout: 2000, // timeout autohide
    cb: undefined // callback funciton
  },
  types: miniToastr.config.types,
  notify: (apayload:any) => {
    var payload = { ...notificationService.defaultMessage, ...apayload }
    miniToastr[payload.type](payload.message, payload.title, payload.timeout, payload.cb)
  }
}

export default notificationService

