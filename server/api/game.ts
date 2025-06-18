const room = 'ROOM'

export default defineWebSocketHandler({
  open(peer) {
    // console.log('[ws] open', peer.id)
    peer.subscribe(room)
    peer.publish(room, 'Another user joined the club')
  },

  message(peer, message) {
    // console.log('[ws] message', peer.id, message)
    peer.publish(room, message.text())
  },

  // close(peer, event) {
  //   console.log('[ws] close', peer.id, event)
  // },

  // error(peer, error) {
  //   console.log('[ws] error', peer.id, error)
  // },
})
