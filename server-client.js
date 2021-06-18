import {getRemote} from 'mockttp'

export const server = getRemote({ standaloneServerUrl: 'http://localhost:1773' })

before(async () => {
  // Starts the server on a dynamic port. The port number that can later be
  // retrieved as server.url
  await server.start(8080)
})

after(async () => {
  await server.stop()
})