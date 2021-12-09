import app from './App'
import './dataBase'

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})