import micro from 'micro'
import { router, get, post } from 'microrouter'

const server = micro(
  router(
    get('/', async (req, res) => {
      console.log('Got')
      return []
    }),
    post('/', async (req, res) => {
      console.log('Posted')
      return [{ name: "Posted Thing"}]
    }),
  ),
)

server.listen(4000, () => console.log(`Server started!`))
